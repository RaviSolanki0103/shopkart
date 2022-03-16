import { Card, Descriptions, Row, Col, Steps, Popover } from "antd";
import "./ordertrack.css";
const { Step } = Steps;
const OrderTrack = () => {
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

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  return (
    <div className="order-track">
      <Card title="Delivery Address" bordered={true}>
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
            <Step title="Finished" description="You can hover on the dot." />
            <Step title="In Progress" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
          </Steps>
        </Card.Grid>
      </Card>
    </div>
  );
};

export default OrderTrack;
