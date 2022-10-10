import StyledBuilingList from "./styles";
import { useStore } from "../../../../providers/store";
import BuilingRow from "../building-row";
import BuildingSavePopup from "../building-save-popup";
import { Button, Modal } from "../../../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuildingList() {
  const { userBuildings, createBuilding } = useStore();
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/session");
  };

  const handleModal = () => {
    setShowAddModal((state) => !state);
  };

  return (
    <StyledBuilingList>
      <Button
        variant="confirm"
        icon="add"
        title={<span>Cadastrar imóvel</span>}
        onClick={handleModal}
      />
      <div className="list">
        {userBuildings?.map((item) => (
          <BuilingRow key={item.id} item={item} />
        ))}
        {!userBuildings.length && (
          <span className="no-buildings">Não existem Imóveis cadastrados</span>
        )}
      </div>
      <Modal
        title="Novo imóvel"
        show={showAddModal}
        content={
          <BuildingSavePopup
            setShow={setShowAddModal}
            onSubmit={createBuilding}
          />
        }
        setShow={setShowAddModal}
      />
      <Button
        onClick={handleBack}
        variant="primary"
        title="Voltar"
        icon="arrow_back"
      />
    </StyledBuilingList>
  );
}

export default BuildingList;
