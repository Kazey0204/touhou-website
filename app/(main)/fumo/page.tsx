"use client";

import FumoService from "@/app/services/fumos/fumo.services";
import { useState, useEffect } from "react";
import { FumoType } from "@/app/services/fumos/fumo.services";

// Antd
import { Table, Image, Modal, Input, Button } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

export default function FumoList() {

  const thongTinSV = {
    fullName: "Nguyen Minh Anh",
    studentId: "124000167",
  };

  const columns = [
    { title: "Fumo ID", dataIndex: "FumoId", key: "FumoId" },
    {
      title: "Fumo Name",
      dataIndex: "FumoName",
      key: "FumoName",
    },
    {
      title: "Fumo Image",
      dataIndex: "FumoImage",
      key: "FumoImage",
      render: (url: string) => {
        return (
          <div className="w-20 h-20 overflow-hidden rounded-md border border-gray-200">
            <Image src={url} />
          </div>
        )
      }
    },
    {
      title: "Description",
      dataIndex: "FumoDescription",
      key: "FumoDescription",
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "FumoPrice",
      key: "FumoPrice",
    },
    {
      title: "Action",
      key: "actions",
      width: 200,
      render: (item: FumoType) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            ghost
            icon={<EditOutlined />}
            onClick={() => openUpdateModal(item)}
          >
            Update
          </Button>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => openDeleteModal(item)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // state dữ liệu 
  const [fumoData, setFumoData] = useState<FumoType[]>([]);

  // state modal
  const [modalUpdate, setModalUpdate] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  // state giá trị form cho inputs
  const [FumoName, setFumoName] = useState("");
  const [FumoImage, setFumoImage] = useState("");
  const [FumoDescription, setFumoDescription] = useState("");
  const [FumoPrice, setFumoPrice] = useState("");
  const [selectedFumoId, setSelectedFumoId] = useState("");

  // reset form
  const resetForm = () => {
    setSelectedFumoId("");
    setFumoName("");
    setFumoImage("");
    setFumoDescription("");
    setFumoPrice("");
  };

  // Hàm lấy dữ liệu và gán
  const fetchFumoData = async () => {
    const data = await FumoService.getAllFumos();
    setFumoData(data);
  };

  // Chạy hàm lấy dữ liệu khi load trang web
  useEffect(() => {
    fetchFumoData();
  }, []);

  // Mở modal Thêm/Sửa
  const openUpdateModal = (fumo: FumoType | null) => {
    setModalUpdate(true);
  };
  // Đóng modal Thêm/Sửa
  const closeUpdateModal = () => {
    setModalUpdate(false);
  }

  // Mở modal Xóa
  const openDeleteModal = (fumo: FumoType) => {
    setSelectedFumoId(fumo.FumoId)
    setDeleteModal(true);
  };
  // Đóng modal Xóa
  const closeDeleteModal = () => {
    setDeleteModal(false);
  }
  
  const handleUpdateFumo = async () => {
    const payload = {
    FumoName: FumoName,
    FumoImage: FumoImage,
    FumoDescription: FumoDescription,
    FumoPrice: FumoPrice,
    }
  
  await FumoService.addFumo(payload);
  fetchFumoData();
  closeUpdateModal();
  }

  const handleDelete = () => {
    
  }
  // Thực hiện chức năng thêm, sửa, xóa cho dữ liệu
  return (
    <div className="max-w-7xl mx-auto p-3">
      {/* Thông tin sinh viên */}
      <div className="bg-white border rounded-lg p-6 mb-6 shadow-sm flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">THI GIỮA KỲ</h2>
          <div className="flex gap-4">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm border border-blue-100">
              Họ tên: {thongTinSV.fullName || "___"}
            </span>
            <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm border border-purple-100">
              MSSV: {thongTinSV.studentId || "___"}
            </span>
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => openUpdateModal(null)}
          className="rounded-md"
        >
          Add Fumo
        </Button>
      </div>

      {/* Bảng antd */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
        <Table
          dataSource={fumoData}
          columns={columns}
          rowKey="FumoId"
          pagination={{ pageSize: 5 }}
        />
      </div>

      {/* Modal Thêm/Sửa */}
      <Modal
        title="Add / Update Fumo"
        open={modalUpdate}
        onCancel={closeUpdateModal}
        onOk={handleUpdateFumo}
        okText="Saved"
        cancelText="Canceled"
        centered
      >
        <hr className="my-4" />
        <div className="space-y-4">
          <div>
            <label className="block font-bold mb-1">Name</label>
            <Input size="large" placeholder="Input name..." value={FumoName} onChange={(name) => setFumoName(name.target.value)} />
          </div>
          <div>
            <label className="block font-bold mb-1">Image Link</label>
            <Input size="large" placeholder="URL image..." value={FumoImage} onChange={(img) => setFumoImage(img.target.value)} />
          </div>
          <div>
            <label className="block font-bold mb-1">Description</label>
            <Input.TextArea rows={3} placeholder="Input description..." value={FumoDescription} onChange={(name) => setFumoDescription(name.target.value)} />
          </div>
          <div>
            <label className="block font-bold mb-1">Price</label>
            <Input size="large" placeholder="E.g.: 150000" type="number" value={FumoPrice} onChange={(price) => setFumoPrice(price.target.value)} />
          </div>
        </div>
      </Modal>

      {/* Modal xác nhận xóa */}
      <Modal
        open={deleteModal}
        onCancel={closeDeleteModal}
        onOk={handleDelete}
        okText="Xóa"
        okButtonProps={{ danger: true }}
        cancelText="Hủy"
        centered
      >
        <div className="text-center p-4 text-red-500">
          <ExclamationCircleOutlined className="text-5xl mb-4" />
          <h3 className="text-xl font-bold">Comfirm Delete?</h3>
          <p className="text-gray-700">
             This Fumo will be deleted.
          </p>
        </div>
      </Modal>
    </div>
  );
}