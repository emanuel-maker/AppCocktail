import "./style.sass";
import proposals from '../exampleData.json';
import React from "react";
import ProposalCard from "../../components /ProposalCard/ProposalCard";

const Proposals = () => {

  const [proposalSelected, setProposal] = React.useState(0);

  return (
    <div>
        <h2 className="title-proposals"><span>HOTEL</span> Mieres del Camín Apartamentos</h2>
        <div className="container-proposals">
          { proposals.map(proposal => 
            <ProposalCard 
              key={proposal.id} 
              proposal={proposal} 
              setProposal={setProposal} 
              proposalSelected={proposalSelected}
            />
          )}
        </div>
    </div>
  );
}

export default Proposals;