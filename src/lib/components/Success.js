import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Success = ({ isSubmitted }) => {
  const values = JSON.parse(isSubmitted.values);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-20">
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="text-[96px] text-green-500"
      />
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl">Your form has been submitted successfully.</h1>
        <h3>Redirecting...</h3>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h3>
          <span className="text-green-500">First Name:</span> {values.first}
        </h3>
        <h3>
          <span className="text-green-500">Last Name:</span> {values.second}
        </h3>
        <h3>
          <span className="text-green-500">Email:</span> {values.third}
        </h3>
      </div>
    </div>
  );
};

export default Success;
