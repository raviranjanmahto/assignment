import React from "react";
import Button from "../components/Button";
import FormRow from "../components/FormRow";

const Landing = () => {
  const handleJobInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    // handleChange({ name, value });
  };
  return (
    <form>
      <h3>Token Generator Application</h3>
      <div>
        <FormRow
          type='text'
          name='Number of blue tokens'
          value=''
          handleChange={handleJobInput}
        />
        <FormRow
          type='text'
          name='Blue token prefix'
          value=''
          handleChange={handleJobInput}
        />
        <FormRow
          type='text'
          name='Blue token per row'
          value=''
          handleChange={handleJobInput}
        />
        <FormRow
          type='text'
          name='Number of red tokens'
          value=''
          handleChange={handleJobInput}
        />
        <FormRow
          type='text'
          name='Red token prefix'
          value=''
          handleChange={handleJobInput}
        />
        <FormRow
          type='text'
          name='Red token per row'
          value=''
          handleChange={handleJobInput}
        />
        <Button type='submit' text='Generate' />
        <Button type='button' text='Clear' />
      </div>
    </form>
  );
};

export default Landing;
