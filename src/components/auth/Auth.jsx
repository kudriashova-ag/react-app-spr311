import { UserOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import Registration from "../registration/Registration";
import Login from "../login/Login";

const Auth = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const toogleIsLogin = () => setIsLogin(!isLogin);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        shape="circle"
        icon={<UserOutlined />}
      />
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        {isLogin ? (
          <Login toogleIsLogin={toogleIsLogin} />
        ) : (
          <Registration toogleIsLogin={toogleIsLogin} />
        )}
      </Modal>
    </div>
  );
};

export default Auth;
