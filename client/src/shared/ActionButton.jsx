import AnchorLink from "react-anchor-link-smooth-scroll";

const ActionButton = (buttonText) => {
  return (
    <AnchorLink className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
      {buttonText}
    </AnchorLink>
  );
};

export default ActionButton;
