"use client"

import FumoService from "@/app/services/fumos/fumo.services"
import { useState, useEffect } from "react"
import { FumoType } from "@/app/services/fumos/fumo.services"
import { Table, Image, Modal, Input, Button } from "antd"
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons"

export default function FumoList() {

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (url: string) => (
        <div className="w-20 h-20 overflow-hidden rounded-md border border-gray-200">
          <Image src={url} alt="fumo" />
        </div>
      ),
    },
    { title: "Description", dataIndex: "description", key: "description", ellipsis: true },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Action",
      key: "actions",
      width: 200,
      render: (_: unknown, item: FumoType) => (
        <div className="flex gap-2">
          <Button type="primary" ghost icon={<EditOutlined />} onClick={() => openUpdateModal(item)}>
            Update
          </Button>
          <Button danger icon={<DeleteOutlined />} onClick={() => openDeleteModal(item)}>
            Delete
          </Button>
        </div>
      ),
    },
  ]

  const [fumoData, setFumoData] = useState<FumoType[]>([])
  const [modalUpdate, setModalUpdate] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedId, setSelectedId] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")

  const resetForm = () => {
    setSelectedId("")
    setName("")
    setImage("")
    setDescription("")
    setPrice("")
    setIsEditing(false)
  }

  const fetchFumoData = async () => {
    const data = await FumoService.getAllFumos()
    setFumoData(data)
  }

  useEffect(() => { fetchFumoData() }, [])

  // Mở modal thêm mới
  const openUpdateModal = (fumo: FumoType | null) => {
    if (fumo) {
      // Chế độ sửa — điền sẵn data vào form
      setIsEditing(true)
      setSelectedId(fumo.id)
      setName(fumo.name)
      setImage(fumo.image)
      setDescription(fumo.description)
      setPrice(fumo.price)
    } else {
      // Chế độ thêm mới
      resetForm()
    }
    setModalUpdate(true)
  }

  const closeUpdateModal = () => {
    setModalUpdate(false)
    resetForm()
  }

  const openDeleteModal = (fumo: FumoType) => {
    setSelectedId(fumo.id)
    setDeleteModal(true)
  }

  const closeDeleteModal = () => {
    setDeleteModal(false)
    setSelectedId("")
  }

  // Xử lý thêm hoặc sửa
  const handleSubmit = async () => {
    const payload = { name, image, description, price }
    try {
      if (isEditing) {
        await FumoService.updateFumo(selectedId, payload)
      } else {
        await FumoService.addFumo(payload)
      }
      fetchFumoData()
      closeUpdateModal()
    } catch {
      alert("Error!")
    }
  }

  // Xử lý xóa
  const handleDelete = async () => {
    try {
      await FumoService.deleteFumo(selectedId)
      fetchFumoData()
      closeDeleteModal()
    } catch {
      alert("Fail to delete!")
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D8CFBC', fontFamily: 'Courier New, monospace' }}>
      <div className="max-w-7xl mx-auto p-6">

        {/* câu slogan */}
        <div className="rounded-xl p-6 mb-6 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 border"
          style={{ backgroundColor: '#E4DDD0', borderColor: '#B0A090' }}>
          <p className="text-xl font-bold italic text-center sm:text-left"
            style={{ color: '#3D2E20', fontFamily: 'Courier New, monospace' }}>
            "Everyone should have at least one Fumo in their life."
          </p>
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={() => openUpdateModal(null)}
            style={{ backgroundColor: '#6B5E4E', borderColor: '#6B5E4E', fontFamily: 'Courier New, monospace', flexShrink: 0 }}
          >
            Add Fumo
          </Button>
        </div>

        {/* bảng fumo */}
        <div className="rounded-xl overflow-hidden border shadow-sm"
          style={{ backgroundColor: '#cac0ae', borderColor: '#B0A090' }}>
          <Table
            dataSource={fumoData}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
            style={{ fontFamily: 'Courier New, monospace' }}
          />
        </div>

        {/* Modal thêm/sửa */}
        <Modal
          title={
            <span style={{ fontFamily: 'Courier New, monospace', color: '#3D2E20' }}>
              {isEditing ? 'Update Fumo' : 'Add Fumo'}
            </span>
          }
          open={modalUpdate}
          onCancel={closeUpdateModal}
          onOk={handleSubmit}
          okText={isEditing ? 'Update' : 'Add'}
          cancelText="Cancel"
          centered
          okButtonProps={{ style: { backgroundColor: '#6B5E4E', borderColor: '#6B5E4E' } }}
        >
          <hr className="my-4" style={{ borderColor: '#B0A090' }} />
          <div className="space-y-4">
            {[
              { label: 'Name', placeholder: 'Input name...', value: name, onChange: setName, type: 'text' },
              { label: 'Image Link', placeholder: 'URL image...', value: image, onChange: setImage, type: 'text' },
              { label: 'Price', placeholder: 'E.g.: 150000', value: price, onChange: setPrice, type: 'number' },
            ].map(f => (
              <div key={f.label}>
                <label className="block font-bold mb-1" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                  {f.label}
                </label>
                <Input
                  size="large"
                  type={f.type}
                  placeholder={f.placeholder}
                  value={f.value}
                  onChange={e => f.onChange(e.target.value)}
                  style={{ borderColor: '#B0A090', fontFamily: 'Courier New' }}
                />
              </div>
            ))}
            <div>
              <label className="block font-bold mb-1" style={{ fontFamily: 'Courier New', color: '#3D2E20' }}>
                Description
              </label>
              <Input.TextArea
                rows={3}
                placeholder="Input description..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{ borderColor: '#B0A090', fontFamily: 'Courier New' }}
              />
            </div>
          </div>
        </Modal>

        {/* Modal xóa */}
        <Modal
          open={deleteModal}
          onCancel={closeDeleteModal}
          onOk={handleDelete}
          okText="Delete"
          okButtonProps={{ danger: true }}
          cancelText="Cancel"
          centered
        >
          <div className="text-center p-4" style={{ color: '#C0392B' }}>
            <ExclamationCircleOutlined className="text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Courier New' }}>
              Confirm Delete?
            </h3>
            <p style={{ color: '#5C4A38', fontFamily: 'Courier New' }}>
              This Fumo will be permanently deleted.
            </p>
          </div>
        </Modal>

      </div>
    </div>
  )
}