const session = null;

export default function error() {
  if (!session) throw new Error("Auth is required to access this resource");

  return (
    <div>
      <h1>This is auth only page</h1>
    </div>
  );
}
