import NotificationsSection from '@/components/Profile/NotificationsSection';

const page = () => {

    
  const notifications = [
    {
      _id: "1",
      message: "Tu pedido ha sido entregado",
      date: "2023-12-10",
      isRead: false,
    },
    {
      _id: "2",
      message: "Nuevo producto disponible",
      date: "2023-12-09",
      isRead: true,
    },
    {
      _id: "3",
      message: "Actualización de perfil exitosa",
      date: "2023-12-08",
      isRead: true,
    },
  ];


  return (
    <div>
        <NotificationsSection notifications={notifications} />
    </div>
  )
}

export default page;
