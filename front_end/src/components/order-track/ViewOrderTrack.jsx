import { Card, Descriptions, Row, Col, Steps, Popover } from "antd";
import "./viewordertrack.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Moment from "react-moment";

const { Step } = Steps;
const ViewOrderTrack = () => {
  const productDetails = useSelector((state) => state.sendOrderDataToTrack);
  const orderStatus = ["Ordered", "Shipped", "Out For Delivery", "Delivered"];
  const customDot = (dot, { description, title }) => (
    <Popover
      content={
        <span>
          {title} at {description}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  return (
    <div className="order-track">
      {productDetails ? (
        <>
          <Card
            title="Delivery Address"
            className="order-track-user-info"
            bordered={true}
          >
            <Descriptions title="User Info">
              <Descriptions.Item label="Name">
                {productDetails.delivery_info.name}
              </Descriptions.Item>
              <Descriptions.Item label="Phone">
                {productDetails.delivery_info.mobile}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {productDetails.delivery_info.email}
              </Descriptions.Item>
              <Descriptions.Item label="Pin Code">
                {productDetails.delivery_info.pincode}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {productDetails.delivery_info.address}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="Order Tracking" bordered={true}>
            <Card.Grid className="order-grid">
              <Row gutter={[16, 16]} align="middle">
                <Col span={6}>
                  <img
                    src={require(`../../../public/uploads/${productDetails.product_img}`)}
                    alt="img not found"
                    className="order-img"
                  />
                </Col>
                <Col span={6}>
                  <h2>{productDetails.name}</h2>
                  <p>Color: {productDetails.color}</p>
                  <p>Size: {productDetails.size}</p>
                  <p>Seller: {productDetails.seller}</p>
                </Col>
                <Col span={6}>
                  <p>{productDetails.price}</p>
                </Col>
                <Col span={6}>
                  <p>{productDetails.status}</p>
                </Col>
              </Row>
            </Card.Grid>
            <Card.Grid key="Track" className="order-grid">
              <Steps
                current={orderStatus.indexOf(productDetails.status)}
                progressDot={customDot}
              >
                <Step
                  title="Ordered"
                  description={
                    <Moment format="ddd, DD MMM YYYY">
                      {productDetails.created_at}
                    </Moment>
                  }
                />
                <Step
                  title="Shipped"
                  description={
                    <Moment format="ddd, DD MMM YYYY" add={{ days: 2 }}>
                      {productDetails.created_at}
                    </Moment>
                  }
                />
                <Step
                  title="Out For Delivery"
                  description={
                    <Moment format="ddd, DD MMM YYYY" add={{ days: 4 }}>
                      {productDetails.created_at}
                    </Moment>
                  }
                />
                <Step
                  title="Delivered"
                  description={
                    <Moment format="ddd, DD MMM YYYY" add={{ days: 6 }}>
                      {productDetails.created_at}
                    </Moment>
                  }
                />
              </Steps>
            </Card.Grid>
          </Card>
        </>
      ) : (
        <Navigate to="/order" />
      )}
    </div>
  );
};

export default ViewOrderTrack;
