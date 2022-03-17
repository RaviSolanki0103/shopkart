import { Layout, Row, Col, Collapse, Card, Checkbox, Input } from "antd";
import { useState } from "react";
import "./vieworder.css";

const { Sider, Content } = Layout;
const { Panel } = Collapse;

const ViewOrder = () => {
  const [searchValue, setSearchValue] = useState("");

  const data = [
    {
      image: "kid.webp",
      name: "cr1",
      color: "black",
      seller: "xyz",
      price: 256,
      status: "Delivered",
    },
    {
      image: "kidn.png",
      name: "cr2",
      color: "black",
      seller: "xyz",
      price: 256,
      status: "Delivered",
    },
    {
      image: "kids-were.png",
      name: "cr3",
      color: "black",
      seller: "xyz",
      price: 256,
      status: "Delivered",
    },
  ];

  function callback(key) {
    console.log(key);
  }
  function onChange(checkedValues) {
    console.log(`checked = ${checkedValues}`);
  }
  return (
    <Layout className="order-page-layout">
      <Sider theme="light" className="order-filter">
        <Card size="small" title="Filter" extra={<a href="/">clear all</a>}>
          <Collapse defaultActiveKey={["1"]} onChange={callback}>
            <Panel header="Order Status" key="1">
              <Checkbox.Group onChange={onChange}>
                <Row>
                  <Col>
                    <Checkbox value="On the way">On the way</Checkbox>
                  </Col>
                  <Col>
                    <Checkbox value="Delivered">Delivered</Checkbox>
                  </Col>
                  <Col>
                    <Checkbox value="Cancelled">Cancelled</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Panel>
          </Collapse>
        </Card>
      </Sider>
      <Content>
        <div className="margin-10-px order-search">
          <Input
            placeholder="Search your orders here"
            allowClear
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="margin-10-px order-list-of-card">
          <Card title="Orders">
            {data.map((orderGrid, index) => (
              <Card.Grid key={index} className="order-grid">
                <Row gutter={[16, 16]} align="middle">
                  <Col span={6}>
                    <img
                      src={require(`../../assets/${orderGrid.image}`)}
                      alt="img not found"
                      className="order-img"
                    />
                  </Col>
                  <Col span={6}>
                    <h2>{orderGrid.name}</h2>
                    <p>Color: {orderGrid.color}</p>
                    <p>Seller: {orderGrid.seller}</p>
                  </Col>
                  <Col span={6}>{orderGrid.price}</Col>
                  <Col span={6}>{orderGrid.status}</Col>
                </Row>
              </Card.Grid>
            ))}
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default ViewOrder;
