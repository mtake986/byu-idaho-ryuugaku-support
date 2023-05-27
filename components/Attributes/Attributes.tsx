import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Attributes = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Attributes</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            Image by{" "}
            <a
              className="cursor-pointer text-blue-500 duration-300 hover:opacity-50"
              target="_blank"
              href="https://www.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_8609213.htm#query=student&position=14&from_view=search&track=sph"
            >
              pch.vector{" "}
            </a>
            and{" "}
            <a
              className="cursor-pointer text-blue-500 duration-300 hover:opacity-50"
              target="_blank"
              href="https://www.freepik.com/free-vector/profitable-pricing-strategy-price-formation-promo-action-clearance-shopping-idea-design-element-cheap-products-advertisement-customers-attraction_11667081.htm#query=Price&position=8&from_view=search&track=sph"
            >
              vectorjuice
            </a>{" "}
            on Freepik
          </div>
          <div>
            <a
              className="cursor-pointer text-blue-500 duration-300 hover:opacity-50"
              href="https://iconscout.com/icons/youtube"
              target="_blank"
            >
              Free Youtube Icon
            </a>{", "}
            <a
              className="cursor-pointer text-blue-500 duration-300 hover:opacity-50"
              href="https://iconscout.com/icons/twitter"
              target="_blank"
            >
              Free Twitter Icon
            </a>{", "}
            <a
              className="cursor-pointer text-blue-500 duration-300 hover:opacity-50"
              href="https://iconscout.com/icons/instagram"
              target="_blank"
            >
              Free Instagram Icon
            </a>{" "}
            by{" "}
            <a
              className="cursor-pointer text-blue-500 duration-300 hover:opacity-50"
              href="https://iconscout.com/contributors/pixel-icons"
              target="_blank"
            >
              Pixel Icons
            </a>{" "}
            on{" "}
            <a
              className="cursor-pointer text-blue-500 duration-300 hover:opacity-50"
              href="https://iconscout.com"
              target="_blank"
            >
              IconScout
            </a>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Attributes;
