import CustomCounter from "./customCounter/CustomCounter";
import CustomDocTitle from "./customDocumentTitle/CustomDocTitle";
import CustomUserForm from "./customInput/CustomUserForm";

const CustomHook = () => {
  return (
    <div>
      <ul>
        <li>Hooks are reusable functions.</li>
        <li>
          When you have component logic that needs to be used by multiple
          components, we can extract that logic to a custom Hook.
        </li>
        <li>Custom Hooks start with "use". Example: useFetch.</li>
      </ul>
      <CustomDocTitle />
      <CustomCounter />
      <CustomUserForm />
    </div>
  );
};

export default CustomHook;
