import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import Image from "next/image";

// Service
import { createNewProduct } from "../../../service/index";
import { useState } from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";

export default function NewProductDashboard({ openForm, onClose }) {
  const router = useRouter();

  // Image Handler
  // Get Image and Preview
  const [fileSend, setfileSend] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  const uploadToClient = (event) => {
    const preview = [];
    // const images = [];
    for (let i = 0; i < event.target.files.length; i++) {
      preview.push(URL.createObjectURL(event.target.files[i]));
      // images.push(event.target.files[i]);
    }
    setImagePreview(preview);
    setfileSend(event.target.files[0]);
  };

  // State Data
  const initialState = {
    addProduct: {
      name: "",
      description: "",
      type: "",
      process: "",
      elevation: "",
      varieties: "",
      taste: "",
    },
  };
  const [state, setState] = useState(initialState);
  const handleSubmitData = async () => {
    // const newData = {
    //   name: state?.addProduct?.name,
    //   description: state?.addProduct?.description,
    //   type: state?.addProduct?.type,
    //   process: state?.addProduct?.process,
    //   elevation: state?.addProduct?.elevation,
    //   varieties: state?.addProduct?.varieties,
    //   taste: state?.addProduct?.taste,
    //   foto: fileSend,
    // };
    // console.log("data", newData);
    await createNewProduct(state?.addProduct, fileSend);
    swal({
      text: "Product Added",
    });
    router.reload();
  };

  // On change the Input Value (name, email, password)
  const onChangeValue = (e) => {
    setState({
      ...state,
      addProduct: {
        ...state.addProduct,
        [e.target.name]: e.target.value,
      },
    });
  };
  // Delete Image
  function deleteFile(e) {
    const s = imagePreview.filter((img, index) => index !== e);
    setImagePreview(s);
  }

  if (!openForm) return null;
  return (
    <>
      <Transition appear show={openForm} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl  transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="md:text-lg text-sm font-semibold leading-6 text-[#101B49]"
                    >
                      Form Input Product
                    </Dialog.Title>
                    X
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-4">
                    <div>
                      {/* Product Name */}

                      <label
                        htmlFor="name"
                        className="pl-4 block text-xs font-medium text-tertiary"
                      >
                        Product Name
                      </label>
                      <input
                        name="name"
                        value={state?.addProduct?.name}
                        onChange={onChangeValue}
                        required
                        placeholder="cth : Gayo Semi Wash"
                        className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="pl-4 block text-xs font-medium text-tertiary"
                      >
                        Description / Origin
                      </label>
                      <input
                        name="description"
                        value={state?.addProduct?.description}
                        onChange={onChangeValue}
                        required
                        placeholder="cth : Aceh, Gayo"
                        className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* Type */}
                    <div>
                      <label
                        htmlFor="type"
                        className="pl-4 block text-xs font-medium text-tertiary"
                      >
                        Type
                      </label>
                      <input
                        name="type"
                        value={state?.addProduct?.type}
                        onChange={onChangeValue}
                        placeholder="cth : Arabica / Robusta"
                        className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* Process */}
                    <div>
                      <label
                        htmlFor="process"
                        className="pl-4 block text-xs font-medium text-tertiary"
                      >
                        Process
                      </label>
                      <input
                        name="process"
                        value={state?.addProduct?.process}
                        onChange={onChangeValue}
                        placeholder="cth : Semi-Wash"
                        className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* Elevation */}
                    <div>
                      <label
                        htmlFor="elevation"
                        className="pl-4 block text-xs font-medium text-tertiary"
                      >
                        Elevation
                      </label>
                      <input
                        name="elevation"
                        value={state?.addProduct?.elevation}
                        onChange={onChangeValue}
                        placeholder="cth : 1500 - 1700 MASL"
                        className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* Varieties */}
                    <div>
                      <label
                        htmlFor="varieties"
                        className="pl-4 block text-xs font-medium text-tertiary"
                      >
                        Varieties
                      </label>
                      <input
                        name="varieties"
                        value={state?.addProduct?.varieties}
                        onChange={onChangeValue}
                        placeholder="cth : Mix ( Tim-tim, Bourbon, Ateng super, Abyssinia "
                        className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* Taste */}
                    <div>
                      <label
                        htmlFor="taste"
                        className="pl-4 block text-xs font-medium text-tertiary"
                      >
                        Taste
                      </label>
                      <input
                        name="taste"
                        value={state?.addProduct?.taste}
                        onChange={onChangeValue}
                        placeholder="cth : Vanilla, Tobacco, Cinnamon, Spices "
                        className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* Image Upload */}
                    <div>
                      <p>Upload Foto Product :</p>
                      <div className="flex gap-3 items-center">
                        <div className="upload-foto-produk">
                          <div className="image-upload">
                            <label htmlFor="nama_file">
                              <div className="border border-dashed border-secondary rounded-lg w-32 h-20 flex justify-center items-center">
                                {/* <PlusIcon className="w-5 h-5 text-secondary " /> */}
                              </div>
                            </label>
                            <input
                              id="nama_file"
                              type="file"
                              name="nama_file"
                              accept="image/*"
                              disabled={imagePreview.length >= 1}
                              onChange={uploadToClient}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        {/* <XCircleIcon
                                  onClick={() => deleteFile(index)}
                                  className="w-4 h-4 absolute cursor-pointer"
                                /> */}
                        {imagePreview?.map((row, index) => {
                          return (
                            <div
                              key={index}
                              id={index}
                              className="flex items-center "
                            >
                              <button
                                className="bg-red-300 rounded-full px-3 py-2"
                                onClick={() => deleteFile(index)}
                              >
                                Delete Image
                              </button>
                              <img
                                src={row}
                                width={200}
                                height={100}
                                className="object-contain "
                                alt="upload"
                                layout="fixed"
                                objectFit="contain"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      onClick={handleSubmitData}
                      className="ext-xs bg-[#101B49] gap-3 inline-flex px-6 py-2 rounded-full items-center justify-between text-white"
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
