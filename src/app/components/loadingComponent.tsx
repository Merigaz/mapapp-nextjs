import { Spin } from "antd";

export default function LoadingComponent() {
  return (
    <div className="self-center m-auto">
      <Spin size="large" />
    </div>
  );
}
