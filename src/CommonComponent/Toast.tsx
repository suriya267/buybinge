interface toastProps {
  enable: Boolean;
  toast: string;
}
export default function Toast(props: toastProps) {
  const { enable, toast } = props;

  return (
    enable && (
      <div
        className={
          toast === "Item added to cart!"
            ? "text-center fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-3xl shadow-lg transition-opacity duration-300 z-10"
            : "text-center fixed top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-3xl shadow-lg transition-opacity duration-300 z-10"
        }
      >
        {toast}
      </div>
    )
  );
}
