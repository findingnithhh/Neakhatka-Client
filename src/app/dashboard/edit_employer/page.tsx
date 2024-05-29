"use client";
import React, { useState, useEffect } from "react";
import { Typography, Input, Button } from "@/components";

const EditEmployer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleCancel = () => {
    setIsOpen(false);
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
    <form>
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="max-w-[880px] mx-auto rounded-lg shadow-sm">
          <Typography fontSize="xl" className="text-center">
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
                type="button"
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
                name="companyName"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Contact Email</label>
              <Input
                type="email"
                placeholder="sathapanabankinfo@gmail.com"
                className="text-sm w-full"
                name="contactEmail"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Contact Phone</label>
              <Input
                type="tel"
                placeholder="0965774927"
                className="text-sm w-full"
                name="contactPhone"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Contact Person</label>
              <Input
                type="text"
                placeholder="Sal Visal"
                className="text-sm w-full"
                name="contactPerson"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Website link</label>
              <Input
                type="url"
                placeholder="https://www.saathapana.com.kh"
                className="text-sm w-full"
                name="websiteLink"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Total Employees</label>
              <select
                id="totalEmployees"
                className="border text-[#424242] outline-none text-sm rounded-lg block w-full h-[35px]"
                name="totalEmployees"
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
                name="location"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Address</label>
              <Input
                type="text"
                placeholder="8391 Elgin. St. Celina. Delaware 10"
                className="text-sm w-full"
                name="address"
              />
            </div>
          </div>
          <div className="my-4">
            <label className="mb-2 text-sm">Company Description</label>
            <textarea
              id="description"
              rows={4}
              className="p-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300 outline-none"
              placeholder="Typing something..."
              name="description"
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="button"
              colorOutline="danger"
              size="md"
              className="mr-3"
              rounded="lg"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              colorScheme="primary"
              className="w-[175px] text-white"
            >
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditEmployer;
