"use client";
import { ErrorContext } from "@/libs/createContext";
import { Modal } from "antd";
import { useContext, useEffect } from "react";

export default function ModalError() {
  const [modal, contextHolder] = Modal.useModal();
  const { error, setError } = useContext(ErrorContext);

  const modalError = () => {
    let secondsToGo = 5;

    const instance = modal.error({
      title: "Error",
      content: `Algo salió mal, intenta de nuevo`,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
      setError(false);
    }, secondsToGo * 1000);
  };

  useEffect(() => {
    if (error) {
      modalError(); // Mostrar el modal si error es true
    }
  }, [error]);

  return <>{contextHolder}</>;
}
