import { Spin } from "antd";

export default function LoadingComponent() {
  return (
    <>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </>
  );
}
