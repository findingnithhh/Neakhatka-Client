"use client";
import React, { useState, useEffect } from "react";
import { Typography, Input, Button } from "@/components";
import { DetailCard } from "@/Types/DetailCard";
interface EditEmployerProps {
  data: any;
  onUpdate: (formData: any) => void;
}

const EditEmployer = ({ data, onUpdate }: EditEmployerProps) => {
  const [formData, setFormData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleCancel = () => {
    setIsOpen(true);
    console.log(isOpen);
  };
  useEffect(() => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      ...data
    }));
  }, [data]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onUpdate(formData);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState :any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex justify-center items-center mx-auto ">
          <div className="max-w-[880px] mx-auto rounded-lg shadow-sm">
            <Typography fontSize="xl" className="text-center ">
              Edit Company Profile
            </Typography>
            <div>
              <Typography
                fontSize="sm"
                className="text-center mb-4 py-3 px-0 md:px-28"
              >
                The company details will be visible to the public and candidate.
                Please enter accurate information about your company.
              </Typography>
            </div>
            {/* image */}
            <div className="flex flex-col md:flex-row items-center justify-start mb-10">
              <div
                className="avatar rounded-full h-32 w-32 my-2 bg-gray-300 font-[700] flex items-center justify-center"
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!selectedImage && <p>SM</p>}
              </div>
              <div className="flex items-center justify-center">
                <label
                  htmlFor="fileInput"
                  className="py-2 px-4 text-sm cursor-pointer border rounded-full mx-4 transition-all hover:bg-gray-100"
                >
                  Choose photo
                </label>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              {selectedImage && (
                <button
                  className="text-red-700 text-sm hover:bg-red-100 py-2 px-4 cursor-pointer rounded-full transition-all"
                  onClick={handleRemoveImage}
                >
                  Remove photo
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Company Name</label>
                <Input
                  type="text"
                  placeholder="Company name"
                  className="text-sm w-full"
                  value={formData.companyName}
                  onChange={handleChange}
                ></Input>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Contact Email</label>
                <Input
                  type="text"
                  placeholder="sathapanabankinfo@gmail.com"
                  className="text-sm w-full"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  name="contactEmail"
                ></Input>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Contact Phone</label>
                <Input
                  type="number"
                  placeholder="0965774927"
                  className="text-sm w-full"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  name="contactPhone"
                ></Input>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Contact Person</label>
                <Input
                  type="text"
                  placeholder="Sal Visal"
                  className="text-sm w-full"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  name="contactPerson"
                ></Input>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Website link</label>
                <Input
                  type="text"
                  placeholder="https://www.saathapana.com.kh"
                  className="text-sm w-full"
                  value={formData.websiteLink}
                  onChange={handleChange}
                  name="websiteLink"
                ></Input>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Total Employeess</label>
                <select
                  id="countries"
                  className="border text-[#424242] outline-none text-sm rounded-lg block w-full h-[35px]"
                >
                  <option value="10-20">10-20</option>
                  <option value="20-50">20-50</option>
                  <option value="100">&#x3e; 100</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Location</label>
                <Input
                  type="text"
                  placeholder="Phnom Penh"
                  className="text-sm w-full"
                  value={formData.location}
                  onChange={handleChange}
                  name="location"
                ></Input>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Address</label>
                <Input
                  type="text"
                  placeholder="8391 Elgin. St. Celina. Delaware 10"
                  className="text-sm w-full"
                  value={formData.address}
                  onChange={handleChange}
                  name="address"
                ></Input>
              </div>
            </div>
            <div className="my-4">
              <label className="mb-2 text-sm">Company description</label>
              <textarea
                id="message"
                rows={4}
                className="p-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300 outline-none"
                placeholder="Typing something..."
                value={formData.decription}
                  onChange={handleChange}
                  name="decription"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button
                colorOutline="danger"
                size="md"
                className="mr-3"
                rounded="lg"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button colorScheme="primary" className="w-[175px] text-white">
                Save change
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default EditEmployer;