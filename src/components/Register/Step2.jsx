export default function Step2({ user }) {
  return (
    <>
      <h1>Step 2</h1>
      <p>User details:</p>
      <p>{JSON.stringify(user)}</p>
    </>
  );
}
