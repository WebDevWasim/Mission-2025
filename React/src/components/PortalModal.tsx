import { createPortal } from "react-dom";

const PortalModal = () =>
  createPortal(<div>PortalModal</div>, document.getElementById("modal-root"));

export default PortalModal;
