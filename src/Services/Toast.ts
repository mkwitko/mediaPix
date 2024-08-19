import { type Id, type ToastOptions, toast } from "react-toastify";

const showToast = (message?: string, options?: ToastOptions) => {
	return toast(message, options);
};

const showToastSucess = (message?: string, options?: ToastOptions) => {
	return toast.success(message, options);
};

const showToastError = (message?: string, options?: ToastOptions) => {
	return toast.error(message, options);
};

const showToastInfo = (message?: string, options?: ToastOptions) => {
	return toast.info(message, options);
};

const showToastWarning = (message?: string, options?: ToastOptions) => {
	return toast.warning(message, options);
};

const showToastPromise = (promise: Promise<any>) => {
	toast.promise(promise, {});
};

const showLoadingToast = (message?: string, options?: ToastOptions) => {
	const defaultMessage = "Aguarde...";
	return toast.loading(message || defaultMessage, options);
};

const updateToastSucess = (id: Id | null) => {
	if (!id) return;
	toast.update(id, {
		render: "Sucesso",
		type: "success",
		isLoading: false,
		autoClose: 2000,
	});
};

const updateToastError = (id: Id | null, err: any, message?: any) => {
	if (!id) return;
	toast.update(id, {
		render: message || err?.response?.data?.message || "Erro",
		type: "error",
		isLoading: false,
		autoClose: 2000,
	});
};

const dismissToast = (id?: string) => {
	toast.dismiss(id);
};

const isActive = () => {
	return toast.length;
};

export const Toast = {
	show: showToast,
	showSucess: showToastSucess,
	showError: showToastError,
	showInfo: showToastInfo,
	showWarning: showToastWarning,
	showLoading: showLoadingToast,
	showPromise: showToastPromise,
	dismiss: dismissToast,
	updateSucess: updateToastSucess,
	updateError: updateToastError,
	isActive,
};
