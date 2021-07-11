export type Lead = {
  status: string;
  nome: string;
  email: string;
  telefone: string;
  info: {
    RPA: boolean;
    ProdutoDigital: boolean;
    Analytics: boolean;
    BPM: boolean;
  };
};

const LOCALSTORAGE_LEADS_KEY = "@Leadelo/Leads";

const leadsController = {
  getLeads(): Lead[] {
    const localstorageLeads = localStorage.getItem(LOCALSTORAGE_LEADS_KEY);
    if (localstorageLeads === null) {
      return [];
    } else {
      return JSON.parse(localstorageLeads);
    }
  },

  addLead(lead: Lead) {
    const existingLeads = this.getLeads();

    existingLeads.push(lead);
    localStorage.setItem(LOCALSTORAGE_LEADS_KEY, JSON.stringify(existingLeads));
  },

  updateLeadStatus(email: string, status: string) {
    const existingLeads = this.getLeads();

    const leadIndex = existingLeads.findIndex((lead) => lead.email === email);
    if (leadIndex === -1) {
      // nao achou o lead
      return;
    }

    existingLeads[leadIndex].status = status;
    localStorage.setItem(LOCALSTORAGE_LEADS_KEY, JSON.stringify(existingLeads));
  }
}

export default leadsController;