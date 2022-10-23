import { Fragment, useState, useEffect, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Loading from "@/component/Loading";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useRouter } from "next/router";

export default function UpdateProduct({
  isOpen,
  onClose,
  selectedProduct,
  product,
  updateProducts,
  setIsOpenUpdate,
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [fileSend, setFileSend] = useState(null);
  const [list, setList] = useState({});

  const form = useForm({
    defaultValues: useMemo(() => {
      return list;
    }, [list]),
    // defaultValues: {
    //   name: list?.name,
    //   taste: list?.taste,
    //   variety: list?.variety,
    //   score: list?.score,
    //   process: list?.process,
    //   weight: list?.weight,
    //   available: list?.available,
    //   type: list?.type,
    //   beans: list?.beans,
    //   elevation: list?.elevation,
    //   description: list?.description,
    // },
    mode: "onBlur",
  });

  const { register, handleSubmit, reset } = form;
  useEffect(() => {
    const foundData = product?.data?.data?.find(
      (row) => row?.id === selectedProduct
    );
    setList(foundData);
    reset(foundData);
  }, [product?.data?.data, selectedProduct]);

  const uploadToClient = async (event) => {
    const files = event.target.files;
    const file = files[0];
    const base64 = await getBase64(file);
    setFileSend(base64);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader?.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  };

  const doUpdate = updateProducts({
    onSuccess: (res) => {
      if (res) {
        setIsLoading(false);
        swal({
          text: "Success",
          icon: "success",
        });
        product?.refetch();
        router.reload();
        setIsOpenUpdate(false);
      }
    },
    onError: (err) => {
      if (err) {
        setIsLoading(false);
        swal({
          text: "Error",
          icon: "error",
        });
      }
    },
    idProduct: {
      id: selectedProduct,
    },
  });

  const onSubmit = (data, event) => {
    event.preventDefault();
    setIsLoading(true);
    const slug = data?.name
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
    doUpdate.mutate({
      name: data?.name,
      slug: slug,
      process: data?.process,
      weight: parseFloat(data?.weight),
      available: data?.available,
      taste: data?.taste,
      score: parseFloat(data?.weight),
      variety: data?.variety,
      description: data?.description,
      type: data?.type,
      beans: data?.beans,
      elevation: data?.elevation,
      image: fileSend,
    });
    event.target.reset();
  };

  if (!isOpen) return null;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-x-auto"
          onClose={onClose}
        >
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
                <Dialog.Panel className="w-full max-w-5xl  transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                      <div>
                        <label htmlFor="name" className=" block text-sm pl-4">
                          Nama Produk
                        </label>
                        <input
                          placeholder="Nama Produk"
                          className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("name")}
                        />
                      </div>
                      <div>
                        <label htmlFor="taste" className=" block text-sm pl-4">
                          Taste
                        </label>
                        <input
                          placeholder="Taste"
                          className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("taste")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="variety"
                          className=" block text-sm pl-4"
                        >
                          Varierty
                        </label>
                        <input
                          placeholder="Variety"
                          className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("variety")}
                        />
                      </div>
                      <div>
                        <label htmlFor="score" className=" block text-sm pl-4">
                          Score
                        </label>
                        <input
                          placeholder="Score"
                          type="number"
                          className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("score")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="process"
                          className=" block text-sm pl-4"
                        >
                          Process
                        </label>
                        <input
                          placeholder="Process"
                          className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("process")}
                        />
                      </div>
                      <div>
                        <label htmlFor="weight" className=" block text-sm pl-4">
                          Weight
                        </label>
                        <input
                          placeholder="Weight (kg)"
                          type="number"
                          className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("weight")}
                        />
                      </div>
                      {/* <input
                        placeholder="Available"
                        className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("available")}
                      /> */}

                      <div>
                        <label
                          htmlFor="available"
                          className=" block text-sm pl-4"
                        >
                          Available
                        </label>
                        <select
                          name="available"
                          {...register("available")}
                          // value={state?.konfirmasiCustomer?.nama_bank}
                          // onChange={onChangeValue}
                          // onChange={(e) => setIdBank(e.target.value)}
                          required
                          className="h-10 px-4 mb-2 text-lg text-gray-500 placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#4283F4] focus:border-[#4283F4] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          <option>-- Select --</option>
                          <option value="get inquity">Get inquity </option>
                          <option value="out of stock">Out of stock</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="type" className=" block text-sm pl-4">
                          Type
                        </label>
                        <select
                          name="type"
                          {...register("type")}
                          // value={state?.konfirmasiCustomer?.nama_bank}
                          // onChange={onChangeValue}
                          // onChange={(e) => setIdBank(e.target.value)}
                          // defaultValue={idBank}
                          required
                          className="h-10 px-4 mb-2 text-lg text-gray-500 placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#4283F4] focus:border-[#4283F4] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          <option>-- Select Type --</option>

                          <option value="Arabica">Arabica </option>
                          <option value="Robusta">Robusta</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="beans" className=" block text-sm pl-4">
                          Beans
                        </label>
                        <select
                          name="beans"
                          {...register("beans")}
                          // value={state?.konfirmasiCustomer?.nama_bank}
                          // onChange={onChangeValue}
                          // onChange={(e) => setIdBank(e.target.value)}
                          // defaultValue={idBank}
                          required
                          className="h-10 px-4 mb-2 text-lg text-gray-500 placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#4283F4] focus:border-[#4283F4] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          <option>-- Select Beans --</option>

                          <option value="Green">Green </option>
                          <option value="Roasted">Roasted</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="elevation"
                          className=" block text-sm pl-4"
                        >
                          Elevation
                        </label>
                        <input
                          placeholder="Elevation"
                          className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("elevation")}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={uploadToClient}
                        />
                        <img src={fileSend} width={130} height={100} />
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className=" block text-sm pl-4"
                        >
                          Description
                        </label>
                        <input
                          placeholder="Description"
                          className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border   mt-1 focus:ring-[#101B49]  focus:border-[#101B49] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          {...register("description")}
                        />
                      </div>
                      {/* <textarea
                        
                        name="alamat"
                        rows={5}
                        maxLength={2500}
                        placeholder="Description"
                        className="rounded-md px-4 py-2 focus:border-[#101B49] focus:ring-[#101B49] shadow-sm ext-xs text-tertiary placeholder-secondary border focus:shadow-outline w-full"
                      ></textarea> */}
                    </div>
                    <button className="text-xs bg-[#101B49] gap-3 inline-flex px-10 py-2 rounded-lg mb-2 items-center justify-between text-white">
                      Submit{" "}
                      {isLoading && (
                        <Loading color="text-gray-200" fill="[#101B49]" />
                      )}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
