import { CONTRACT_TYPES } from "./constants";

export const CHECK_INVOICE = (invoice: any) => {
    const nfePending = `<small class="text-orange-500"><i class="fas fa-times"></i>&ensp;Nota Fiscal não enviada</small>`;
    const nfeDone = `<small class="text-green-500"><i class="fas fa-check"></i>&ensp;Nota Fiscal ok</small>`;
    const hoursPending = `<small class="text-orange-500"><i class="fas fa-times"></i>&ensp;Horas não enviadas</small>`;
    const hoursDone = `<small class="text-green-500"><i class="fas fa-check"></i>&ensp;Horas ok</small>`;
    const milestonePending = `<small class="text-orange-500"><i class="fas fa-times"></i>&ensp;Entrega não concluída</small>`;
    const milestoneDone = `<small class="text-green-500"><i class="fas fa-check"></i>&ensp;Entrega ok</small>`;


    if (invoice.contract.contractType === CONTRACT_TYPES.FIXED) {
      return `
        ${(!invoice.nfseAttachment) ? nfePending : nfeDone} <br/>
      `
    }

    if (invoice.contract.contractType === CONTRACT_TYPES.HOURLY) {
      return `
        ${(!invoice.nfseAttachment) ? nfePending : nfeDone} <br/>
        ${(!invoice.hoursToInvoice) ? hoursPending : hoursDone} <br/>
      `
    }

    if (invoice.contract.contractType === CONTRACT_TYPES.MILESTONE) {
      return `
        ${(!invoice.nfseAttachment) ? nfePending : nfeDone} <br/>
        ${(!invoice.milestoneAcceptanceCriteria) ? milestonePending : milestoneDone} <br/>
      `
    }
  }