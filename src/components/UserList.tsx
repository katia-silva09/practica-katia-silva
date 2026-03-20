interface User {
  id: number;
  name: string;
  isActive: boolean;
  role?: string;
}

export const UserList = () => {
  const users: User[] = [
    { id: 1, name: "Katia", isActive: true, role: "Admin" },
    { id: 2, name: "Juan", isActive: false },
    { id: 3, name: "María", isActive: true, role: "Editor" },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="border p-4 mb-2 rounded">
          <h2 className="font-bold">{user.name}</h2>
          <p>Estado: {user.isActive ? "Activo" : "Inactivo"}</p>
          <p>Rol: {user.role ?? "Sin rol"}</p>
        </div>
      ))}
    </div>
  );
};

