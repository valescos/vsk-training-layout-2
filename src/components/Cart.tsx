const cart_icon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.31755 1.66388H14.7273C14.7677 1.66388 14.8045 1.67932 14.8424 1.69091L15.172 0.589594C15.2768 0.239363 15.5945 0 15.9546 0H17.5909C17.8168 0 18 0.186249 18 0.41598V1.2479C18 1.47763 17.8168 1.66388 17.5909 1.66388H16.5606L14.0045 10.2046L14.9592 11.337C15.3365 11.7846 15.5064 12.4013 15.3327 12.9637C15.1106 13.683 14.4863 14.1429 13.7664 14.1429H2.04544C1.81951 14.1429 1.63634 13.9566 1.63634 13.7269V12.895C1.63634 12.6652 1.81951 12.479 2.04544 12.479H13.7665L12.4697 10.9406C12.4371 10.9019 12.4131 10.8583 12.3884 10.8151H4.46083C3.82675 10.8151 3.24974 10.4428 2.97974 9.8594L0.125029 3.69125C0.0431461 3.51374 0 3.31673 0 3.12131V3.0035C0 2.26369 0.589897 1.66388 1.31755 1.66388Z"
      fill="#F9FBFF"
    />
    <path
      d="M13.1786 18.0001C12.291 18.0001 11.5714 17.2805 11.5714 16.3929C11.5714 15.5053 12.291 14.7858 13.1786 14.7858C14.0662 14.7858 14.7857 15.5053 14.7857 16.3929C14.7857 17.2805 14.0662 18.0001 13.1786 18.0001Z"
      fill="white"
    />
    <path
      d="M3.53574 18.0001C2.64814 18.0001 1.9286 17.2805 1.9286 16.3929C1.9286 15.5053 2.64814 14.7858 3.53574 14.7858C4.42334 14.7858 5.14288 15.5053 5.14288 16.3929C5.14288 17.2805 4.42334 18.0001 3.53574 18.0001Z"
      fill="white"
    />
  </svg>
);

function Cart() {
  return (
    <div className="relative cursor-pointer">
      {cart_icon}
      <div className="absolute -top-4 -right-3 bg-accent rounded-full size-5 text-white text-[14px] font-body font-thin flex justify-center items-center">
        0
      </div>
    </div>
  );
}

export default Cart;
