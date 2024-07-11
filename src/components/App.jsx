// import { ColorPicker } from './ColorPicker/ColorPicker';
import { useState } from 'react';
// import { Counter } from './Counter/Counter';
import Modal from './Modal/Modal';
// import { TodoList } from './TodoList/TodoList';
// import UncontroledForm from './Forms/UncontroledForm';
import { UserForm } from './Forms/UseForm';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // const handleOpenModal = () => {
  //   setIsOpenModal(true);
  // };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      {/* <Counter /> */}
      {/* <button type="button" onClick={handleOpenModal}>
        Open modal
      </button> */}
      {isOpenModal && (
        <Modal onClose={handleCloseModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint
          illum laborum neque quos. Iste, ad recusandae, facilis sapiente
          repellat repudiandae voluptatibus cumque at voluptatem, nihil
          veritatis ipsam qui vel!
        </Modal>
      )}
      {/* <TodoList /> */}
      <UserForm />
      {/* <ColorPicker /> */}
    </div>
  );
};
