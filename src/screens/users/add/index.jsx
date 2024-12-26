import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import Label from "@/app/components/ui/Label";

export default function AddUser() {
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2"> Add User </h1>

      <form className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2">
        <div className="grid gap-2">
          <Label required={true}>Username</Label>
          <Input placeholder="Enter Username" />
        </div>
        <div className="grid gap-2">
          <Label required={true}>User Type</Label>
          <select className="custom-input appearance-none cursor-pointer">
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label required={true}>Password</Label>
          <Input placeholder="Example@123" />
        </div>
        <div className="grid gap-2">
          <Label required={true}>Confirm Password</Label>
          <Input placeholder="Re-enter the Password" />
        </div>

        <Button className="w-52 col-span-2 mt-2">Submit</Button>
      </form>
    </div>
  );
}