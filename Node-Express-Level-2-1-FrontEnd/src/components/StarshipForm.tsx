interface StarShipForm {
  name: string;
  model: string;
  manufacturer: string;
}

const StarShipForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const starship: StarShipForm = {
      name: formData.get("name") as string,
      model: formData.get("model") as string,
      manufacturer: formData.get("manufacturer") as string,
    };
    console.log(starship);
  };

  return <div></div>;
};

export default StarShipForm;
