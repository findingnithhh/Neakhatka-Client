import React, { ReactNode, useEffect } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl"; // Update size options
  corner?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = "md",
  corner = "md",
  children,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }
    return () => {
      body?.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "w-60", // Set width to 300px
    md: "w-[420px]", // Set width to 400px
    lg: "w-[700px]", // Set width to 500px
    xl: "w-[1000px]", // Set width to 600px
  };

  const corners = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  };

  const modalSize = sizes[size] || sizes["md"]; // Default to "md" if size is not defined

  const modalCorner = corners[corner] || corners["md"]; // Use "md" corner radius if size is not defined

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity backdrop-filter backdrop-blur-sm"
          aria-hidden="true"
          onClick={onClose} // Close modal when clicked outside
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={`inline-block align-bottom bg-red-500 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${modalCorner} ${modalSize}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="absolute top-0 right-0 m-4">
            {/* <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

    {
      /* <div className="flex justify-center items-center h-screen">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Modal
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="md"
          corner="2xl"
        >
          <div className="bg-white p-8">
            <h1 className="flex justify-center flex-col items-center">
              <PiWarningCircleFill className="w-[100px] h-[100px] text-red-500" />
              <Typography fontSize="lg" className="my-2">
                Are you sure?
              </Typography>
              <Typography fontSize="sm" className="text-gray-500 text-center">
                This action will delete all your information, You won’t be able
                to revert this!
              </Typography>
              <div className="flex mt-5 gap-4">
                <Button
                  onClick={() => setIsOpen(false)}
                  className="border border-red-500 rounded-lg"
                >
                  Cancel
                </Button>
                <Button className="bg-red-500 rounded-lg text-white">
                  Remove
                </Button>
              </div>
            </h1>
          </div>
        </Modal>
      </div> */
    }