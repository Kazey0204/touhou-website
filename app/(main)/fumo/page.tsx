"use client"

import FumoService from "@/app/services/fumos/fumo.services"
import { useState, useEffect } from "react"
import { FumoType } from "@/app/services/fumos/fumo.services"
import { Table, Image, Modal, Input, Button, TableProps } from "antd"
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons"

export default function FumoList() {

  const columns: TableProps<FumoType>['columns'] = [
    { 
      title: "ID", 
      dataIndex: "id", 
      key: "id",
      responsive: ['md'], 
      width: 80,
    },
    { 
      title: "Name", 
      dataIndex: "name", 
      key: "name", 
      width: 120,
      fixed: 'left', 
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 100,
      render: (url: string) => (
        <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
          <Image src={url} alt="fumo" className="object-contain h-full w-full" />
        </div>
      ),
    },
    { 
      title: "Description", 
      dataIndex: "description", 
      key: "description", 
      ellipsis: true,
      responsive: ['lg'], 
    },
    { 
      title: "Price", 
      dataIndex: "price", 
      key: "price", 
      width: 100,
      render: (p: string) => <span className="font-bold text-green-800">{p}</span>
    },
    {
      title: "Action",
      key: "actions",
      fixed: 'right', 
      width: 110,
      render: (_: any, item: FumoType) => (
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            type="primary" 
            ghost 
            size="small"
            icon={<EditOutlined />} 
            onClick={() => openUpdateModal(item)}
            className="w-full sm:w-auto"
          />
          <Button 
            danger 
            size="small"
            icon={<DeleteOutlined />} 
            onClick={() => openDeleteModal(item)}
            className="w-full sm:w-auto"
          />
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
    setSelectedId(""); setName(""); setImage(""); setDescription(""); setPrice(""); setIsEditing(false)
  }

  const fetchFumoData = async () => {
    try {
      const data = await FumoService.getAllFumos()
      setFumoData(data)
    } catch (err) {
      console.error("Fetch error:", err)
    }
  }

  useEffect(() => { fetchFumoData() }, [])

  const openUpdateModal = (fumo: FumoType | null) => {
    if (fumo) {
      setIsEditing(true); setSelectedId(fumo.id); setName(fumo.name); setImage(fumo.image); setDescription(fumo.description); setPrice(fumo.price)
    } else { resetForm() }
    setModalUpdate(true)
  }

  const closeUpdateModal = () => { setModalUpdate(false); resetForm() }
  const openDeleteModal = (fumo: FumoType) => { setSelectedId(fumo.id); setDeleteModal(true) }
  const closeDeleteModal = () => { setDeleteModal(false); setSelectedId("") }

  const handleSubmit = async () => {
    const payload = { name, image, description, price }
    try {
      if (isEditing) { await FumoService.updateFumo(selectedId, payload) }
      else { await FumoService.addFumo(payload) }
      fetchFumoData(); closeUpdateModal()
    } catch { alert("Error saving data!") }
  }

  const handleDelete = async () => {
    try { await FumoService.deleteFumo(selectedId); fetchFumoData(); closeDeleteModal() }
    catch { alert("Fail to delete!") }
  }

  return (
    <div className="min-h-screen pb-10" style={{ backgroundColor: '#D8CFBC', fontFamily: 'Courier New, monospace' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6">

        {/* Slogan */}
        <div className="rounded-xl p-4 md:p-6 mb-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 border"
          style={{ backgroundColor: '#E4DDD0', borderColor: '#B0A090' }}>
          <p className="text-lg md:text-xl font-bold italic text-center md:text-left leading-tight text-[#3D2E20]">
            "Everyone should have at least one Fumo in their life."
          </p>
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={() => openUpdateModal(null)}
            className="w-full md:w-auto"
            style={{ backgroundColor: '#6B5E4E', borderColor: '#6B5E4E', flexShrink: 0 }}
          >
            Add Fumo
          </Button>
        </div>

        {/* Bảng Danh Sách Fumo */}
        <div className="rounded-xl overflow-hidden border shadow-sm"
          style={{ backgroundColor: '#cac0ae', borderColor: '#B0A090' }}>
          <Table
            dataSource={fumoData}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
            scroll={{ x: 700 }} 
            style={{ fontFamily: 'Courier New, monospace' }}
          />
        </div>

        {/* Modal Thêm/Sửa */}
        <Modal
          title={<span className="font-mono text-[#3D2E20]">{isEditing ? 'Update Fumo' : 'Add Fumo'}</span>}
          open={modalUpdate}
          onCancel={closeUpdateModal}
          onOk={handleSubmit}
          okText={isEditing ? 'Update' : 'Add'}
          cancelText="Cancel"
          centered
          width={600}
          okButtonProps={{ style: { backgroundColor: '#6B5E4E', borderColor: '#6B5E4E' } }}
        >
          <hr className="my-4" style={{ borderColor: '#B0A090' }} />
          <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2">
            <div>
              <label className="block font-bold mb-1 text-[#3D2E20]">Name</label>
              <Input
                size="large"
                placeholder="Input name..."
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ borderColor: '#B0A090' }}
              />
            </div>
            <div>
              <label className="block font-bold mb-1 text-[#3D2E20]">Image Link (URL)</label>
              <Input
                size="large"
                placeholder="https://..."
                value={image}
                onChange={e => setImage(e.target.value)}
                style={{ borderColor: '#B0A090' }}
              />
            </div>
            <div>
              <label className="block font-bold mb-1 text-[#3D2E20]">Price</label>
              <Input
                size="large"
                type="number"
                placeholder="E.g.: 150000"
                value={price}
                onChange={e => setPrice(e.target.value)}
                style={{ borderColor: '#B0A090' }}
              />
            </div>
            <div>
              <label className="block font-bold mb-1 text-[#3D2E20]">Description</label>
              <Input.TextArea
                rows={4}
                placeholder="Tell us about this Fumo..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{ borderColor: '#B0A090' }}
              />
            </div>
          </div>
        </Modal>

        {/* Modal Xác Nhận Xóa */}
        <Modal
          open={deleteModal}
          onCancel={closeDeleteModal}
          onOk={handleDelete}
          okText="Delete"
          okButtonProps={{ danger: true }}
          cancelText="Cancel"
          centered
          width={400}
        >
          <div className="text-center p-4">
            <ExclamationCircleOutlined className="text-5xl mb-4 text-[#C0392B]" />
            <h3 className="text-xl font-bold mb-2 font-mono">Confirm Delete?</h3>
            <p className="text-[#5C4A38] font-mono">This Fumo will be removed from your collection forever.</p>
          </div>
        </Modal>

      </div>
    </div>
  )
}