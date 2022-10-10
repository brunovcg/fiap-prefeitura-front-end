import StyledBuilingRow from "./styles";
import { Button, Modal } from "../../../../components";
import { useState } from "react";
import BuildingSavePopup from "../../templates/building-save-popup";
import BuildingDeletePopup from "../../templates/building-delete-popup";
import { useStore } from "../../../../providers/store";

function BuilingRow({ item }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { updateBuilding } = useStore();

  const handleEditModal = () => {
    setShowEditModal(true);
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };

  return (
    <StyledBuilingRow>
      <div className="building-row-info">
        <div className="building-info">
          <b>Matrícula:</b> {item.matricula}
        </div>
        <div>
          <b>Área:</b> {item.tamanho}m²
        </div>
        <div>
          <b>Bairro:</b> {item.bairro}
        </div>
        <div>
          <b>Endereço:</b> {item.endereco}
        </div>
      </div>
      <div className="building-row-buttons">
        <Button
          round
          variant="secondary"
          icon="edit"
          onClick={handleEditModal}
        />
        <Button
          round
          variant="cancel"
          icon="delete"
          onClick={handleDeleteModal}
        />
      </div>

      <Modal
        title="Editar Imóvel"
        show={showEditModal}
        setShow={setShowEditModal}
        content={
          <BuildingSavePopup
            setShow={setShowEditModal}
            onSubmit={updateBuilding}
            data={item}
          />
        }
      />
      <Modal
        title="Deletar Imóvel"
        show={showDeleteModal}
        setShow={setShowDeleteModal}
        content={
          <BuildingDeletePopup setShow={setShowDeleteModal} data={item} />
        }
      />
    </StyledBuilingRow>
  );
}

export default BuilingRow;