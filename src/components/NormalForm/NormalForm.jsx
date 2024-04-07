const NormalForm = () => {
    const formStyle ={
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    }

  const handleFormData = (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.phone.value)
    console.log(e.target.password.value)
  };

  return (
    <div>
      <form onSubmit={handleFormData} style={formStyle}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <input type="password" name="password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default NormalForm;
