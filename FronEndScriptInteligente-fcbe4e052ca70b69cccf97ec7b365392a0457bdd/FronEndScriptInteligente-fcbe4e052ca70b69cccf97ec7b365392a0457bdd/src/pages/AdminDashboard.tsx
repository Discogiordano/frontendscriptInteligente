import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminDashboard.css";
import gerenciarUsuariosIcon from "./images/gerenciar_usuarios.ico"; // Importe a imagem

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo ao Painel do Administrador</h1>
      <div className="button-grid">
        <button onClick={() => navigate("/edit-profile")}>
          Alterar Dados do Perfil
        </button>
        <button onClick={() => navigate("/user-dashboard")}>
          Submissão de Script
        </button>
        <button onClick={() => navigate("/view-user-scripts")}>
          Visualizar Script do Usuário
        </button>
        <button onClick={() => navigate("/configure-integrations")}>
          Configurar Integrações do Sistema
        </button>
        <button onClick={() => navigate("/manage-users")}>
          <img src={gerenciarUsuariosIcon} alt="Gerenciar Usuários" className="icon" />
          Gerenciar todos os perfis
        </button>
        <button onClick={() => navigate("/manage-scripts")}>
          Supervisionar todas as submissões
        </button>
        <button onClick={() => navigate("/audit-activities")}>
          Auditar Atividades do Sistema
        </button>
        <button onClick={() => navigate("/system-maintenance")}>
          Backup e Manutenção do Sistema
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
