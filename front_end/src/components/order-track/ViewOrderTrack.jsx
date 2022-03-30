import { Card, Descriptions, Row, Col, Steps, Popover } from "antd";
import "./viewordertrack.css";
const { Step } = Steps;
const ViewOrderTrack = () => {
  const data = [
    {
      image: "kid.webp",
      name: "cr1",
      color: "black",
      seller: "xyz",
      price: 256,
      status: "Delivered",
    },
  ];

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
      <Card
        title="Delivery Address"
        className="order-track-user-info"
        bordered={true}
      >
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="Order Tracking" bordered={true}>
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
        <Card.Grid key="Track" className="order-grid">
          <Steps current={2} progressDot={customDot}>
            <Step title="Ordered" description="Thu, 11th Nov" />
            <Step title="Shipped" description="Sat, 13th Nov" />
            <Step title="Out For Delivery" description="Tue, 16th Nov" />
            <Step title="Delivered" description="Tue, 16th Nov" />
          </Steps>
        </Card.Grid>
      </Card>
    </div>
  );
};

export default ViewOrderTrack;
