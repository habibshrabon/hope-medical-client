import React from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>This is details :{serviceId}</h2>
      <h3>{serviceId.name}</h3>
      <p>
        Cardiothoracic High Dependency Unit (CTHDU) Price: BDT 8,800 CTHDU is a
        5 -bed unit which designed especially for patients having open heart
        surgery, valve replacement or repair, placement of ventricular assist
        devices, CABG, congenital heart surgery, aortic surgery, aneurysm
        surgery, ASD, VSD, TOF, and Ebstein’s Anomaly. Patients maybe admitted
        in the CTHDU before and after planned surgery or maybe later as a
        step-down procedure when moved from ICUs.
      </p>
    </div>
  );
};

export default Details;
