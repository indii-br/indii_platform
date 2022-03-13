export const JOB_STATUS = {
    IN_REVIEW: {
        label: 'Aguardando Revisão',
        color: 'text-orange-500'
    },
    PUBLISHED: {
        label: 'Publicado',
        color: 'text-indigo-500'
    },
    ARCHIVED: {
        label: 'Arquivado',
        color: 'text-red-500'
    },
    COMPLETED: {
        label: 'Arquivado',
        color: 'text-teal-500'
    }
}

export const RATE_TYPE = {
    HOURLY: {
        label: 'Por Hora',
    },
    FIXED: {
        label: 'Fixo',
    },
    INDII: {
        label: 'Indii Squad'
    },
    MILESTONE: {
        label: 'Por Entrega'
    }
}

export const PAYMENT_CYCLES = [
    {
        key: 'WEEKLY',
        label: 'Semanalmente',
    },
    {
        key: 'BIWEEKLY',
        label: 'Quinzenalmente'
    },
    {
        key: 'MONTHLY',
        label: 'Mensalmente'
    }
]

export const SUBMIT_DOCUMENT_LIMIT = [
    {
        key: '1_DAY',
        label: '1 Dia corrido após fechar o ciclo',
    },
].concat(Array.from(Array(9).keys()).map(i => ({
    key: `${i + 2}_DAYS`,
    label: `${i + 2} Dias corridos após fechar o ciclo`
})))

export const DUE_DATE_LIMIT = [
    {
        key: '1_DAY',
        label: '1 Dia corrido após fechar o ciclo',
    },
].concat(Array.from(Array(14).keys()).map(i => ({
    key: `${i + 2}_DAYS`,
    label: `${i + 2} Dias corridos após fechar o ciclo`
})))


export const CONTRACT_MODEL_TYPE = {
    SELF_UPLOADED_CONTRACT: {
        label: 'Contrato Próprio'
    }
}

export const CONTRACT_STATUS = {
    SELF_UPLOADED_WAITING_CONFIG_PAYMENT: {
        label: 'Aguardando',
        sub_label: 'Configurar Forma de Pagamento',
        color: 'text-orange-500',
        position: 2
    },
    SELF_UPLOADED_WAITING_CONTRACTOR: {
        label: 'Aguardando',
        sub_label: 'Profissional entrar no projeto',
        color: 'text-orange-500',
        position: 3
    },
    SELF_UPLOADED_WAITING_UPLOAD_CONTRACT: {
        label: 'Aguardando',
        sub_label: 'Upload do Contrato',
        color: 'text-orange-500',
        position: 4
    },
    SELF_UPLOADED_CYCLE: {
        label: 'Ativo',
        sub_label: 'Contrato importado',
        color: 'text-teal-500',
        position: 999
    },
    ARCHIVED: {
        label: 'Arquivado',
        sub_label: 'Contrato fechado',
        color: 'text-gray-500',
        position: 999
    },
    DONE: {
        label: 'Concluído',
        sub_label: 'Contrato concluido',
        color: 'text-gray-500',
        position: 999
    }
}

export const USER_TYPES = {
    CLIENT: 'CLIENT',
    CONTRACTOR: 'CONTRACTOR'
}