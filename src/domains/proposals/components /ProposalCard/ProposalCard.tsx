import { ProposalType } from "../../types/proposalType";
import './style.sass';

type TProps = {
  proposal: ProposalType;
  proposalSelected: number;
  setProposal: (id : number) => void;
}

const ProposalCard = ({ proposal, proposalSelected, setProposal }: TProps) => {

  const { id, title , options } = proposal;
  const isSelected = proposalSelected === id;

  const handleSelectProposal = () => {
    setProposal(id);
  }

  return (
    <div className={`proposal-card ${isSelected && 'selected-card'}`} onClick={handleSelectProposal}>
        <h4>{ title }</h4>
        <ul>
          {
            options.map(option => <li key={option}>{ option}</li>)
          }
        </ul>
        <div>
          <div className={`input-row`}>
            <label className={`input-custom`}>
              <input 
                type="radio" 
                checked={isSelected} 
                onChange={e => {}}
              />
              <span className="checkmark"></span>
            </label>
            <p>Elegir Régimen</p>
          </div>
        </div>
    </div>
  );
}

export default ProposalCard;