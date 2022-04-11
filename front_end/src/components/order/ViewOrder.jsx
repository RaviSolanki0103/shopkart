import {
  Layout,
  Row,
  Col,
  Collapse,
  Card,
  Checkbox,
  Input,
  Pagination,
} from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./vieworder.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../utils/axios-default-baseurl";
import {
  loginStatus,
  loginToken,
  sendOrderDataToTrack,
} from "../../redux/actions/index";

import Toast from "../../utils/Toast";

const { Sider, Content } = Layout;
const { Panel } = Collapse;

const ViewOrder = () => {
  // search value store here
  const [searchValue, setSearchValue] = useState("");

  // pagination data store here like current open page and total number of data
  const [paginationData, setPaginationData] = useState({
    currentPage: 0,
    totalData: 0,
    pageSize: 2,
  });

  // list of product data store here
  const [productData, setProductData] = useState([]);

  // token getting from redux store
  const token = useSelector((state) => state.loginToken);

  // creating instance of dispatcher
  const dispatch = useDispatch();

  // for navigation
  let navigate = useNavigate();

  // filter options
  const options = [
    { label: "Ordered", value: "Ordered" },
    { label: "Shipped", value: "Shipped" },
    { label: "Out For Delivery", value: "Out For Delivery" },
    { label: "Delivered", value: "Delivered" },
  ];

  // checkedList filter
  const [checkedList, setCheckedList] = useState([]);

  const fetchOrderProducts = (_page, _name, _status) => {
    axios
      .get("/orders", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        params: {
          _page,
          _name,
          _status,
        },
      })
      .then((res) => {
        let result = res.data;
        if (result.status === 401) {
          dispatch(loginStatus(false));
          dispatch(loginToken(null));
          Toast({
            msg: "Unauthorized access !!!, please login again !!!",
            success: false,
          });
          navigate("/");
        } else if (result.status === 404) {
          setPaginationData({
            currentPage: 0,
            totalData: 0,
            pageSize: 2,
          });
        } else {
          setPaginationData({
            currentPage: result.data.page,
            totalData: result.data.totalDocs,
            pageSize: result.data.limit,
          });
          setProductData(getListOfProduct(result.data));
        }
        // setting list of products here which will be
        // reder when first time page load
      })
      .catch((err) => {
        // const error = err as import("axios").AxiosError;
        if (err.response.status === 401) {
          dispatch(loginStatus(false));
          dispatch(loginToken(null));
          Toast({
            msg: "Unauthorized access !!!, please login again !!!",
            success: false,
          });
          navigate("/");
        } else {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    fetchOrderProducts();
  }, []);

  const getListOfProduct = (result) => {
    let orderProductData = [];

    result.docs.map((order) =>
      // looping individual order of user
      order.products.map((product) =>
        // looping individual product of user order
        orderProductData.push({
          ...product,
          status: order.status,
          delivery_info: order.delivery_info,
          created_at: order.createdAt,
        })
      )
    );
    return orderProductData;
  };

  const callback = (key) => {
    console.log(key);
  };

  const onChange = (checkedValues) => {
    setCheckedList(checkedValues);
    if (checkedValues.length !== 0) {
      fetchOrderProducts(1, "", checkedValues);
    } else {
      fetchOrderProducts();
    }
  };

  const clearAll = () => {
    setCheckedList([]);
    if (searchValue.length !== 0) {
      fetchOrderProducts(1, searchValue);
    } else {
      fetchOrderProducts();
    }
  };

  // search on order product name
  const onSearch = (value) => {
    setSearchValue(value);
    if (value && value.trim().length !== 0) {
      fetchOrderProducts(1, value);
    } else {
      fetchOrderProducts();
    }
  };

  // changing current page based on selection
  const onPageChange = (page) => {
    setPaginationData({ ...paginationData, currentPage: page });
    if (checkedList.length !== 0 && searchValue.length !== 0) {
      fetchOrderProducts(page, searchValue, checkedList);
    } else if (checkedList.length !== 0) {
      fetchOrderProducts(page, "", checkedList);
    } else if (searchValue.length !== 0) {
      fetchOrderProducts(page, searchValue);
    } else {
      fetchOrderProducts(page);
    }
  };

  // onIndividualProductClick
  const onIndividualProductClick = (product) => {
    dispatch(sendOrderDataToTrack(product));
    navigate("/ordertrack");
  };

  return (
    <Layout className="order-page-layout">
      <Sider theme="light" className="order-filter">
        <Card
          size="small"
          title="Filter"
          extra={
            <Link to="#" onClick={clearAll}>
              clear all
            </Link>
          }
        >
          <Collapse defaultActiveKey={["1"]} onChange={callback}>
            <Panel header="Order Status" key="1">
              <Checkbox.Group
                className="order-filter-checkbox-group"
                options={options}
                value={checkedList}
                onChange={onChange}
              />
            </Panel>
          </Collapse>
        </Card>
      </Sider>
      <Content className="order-page-content">
        <div className="margin-10-px order-search">
          <Input
            placeholder="Search your orders here"
            allowClear
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="margin-10-px order-list-of-card">
          <Card title="Orders">
            {productData.length !== 0 ? (
              productData.map((singleProduct, index) => (
                <Card.Grid
                  key={index}
                  className="order-grid"
                  onClick={() => onIndividualProductClick(singleProduct)}
                >
                  <Row gutter={[16, 16]} align="middle">
                    <Col span={6}>
                      <img
                        src={require(`../../../public/uploads/${singleProduct.product_img}`)}
                        alt="img not found"
                        className="order-img"
                      />
                    </Col>
                    <Col span={6}>
                      <h2 className="order-product-name">
                        {singleProduct.name}
                      </h2>
                      <p>Color: {singleProduct.color}</p>
                      <p>Size: {singleProduct.size}</p>
                      <p>Seller: {singleProduct.seller}</p>
                    </Col>
                    <Col span={6}>{singleProduct.price}</Col>
                    <Col span={6}>{singleProduct.status}</Col>
                  </Row>
                </Card.Grid>
              ))
            ) : (
              <Card.Grid className="order-grid">No Order available</Card.Grid>
            )}
          </Card>
        </div>
        <div className="order-pagination">
          <Pagination
            current={paginationData.currentPage}
            defaultPageSize={paginationData.pageSize}
            onChange={onPageChange}
            total={paginationData.totalData}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default ViewOrder;
