import { BounceLoader } from "react-spinners";

interface SpinnerProps {
  loading: boolean;
}

const CustomSpinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div
      className={`fixed bottom-0 right-0 mr-4 mb-4 ${
        loading ? "block" : "hidden"
      }`}
    >
      <div className="bg-green-700 p-4 rounded-full">
        <BounceLoader color="#00cc99" loading={loading} size={20} />
      </div>
    </div>
  );
};

export default CustomSpinner;
