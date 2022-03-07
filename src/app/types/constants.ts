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

export const CONTRACT_STATUS = {
    SELF_UPLOADED_WAITING_CONTRACTOR: {
        label: 'Aguardando',
        sub_label: 'Profissional entrar no projeto',
        color: 'text-orange-500'
    },
    SELF_UPLOADED_WAITING_CONFIG_PAYMENT: {
        label: 'Aguardando',
        sub_label: 'Configurar Forma de Pagamento',
        color: 'text-orange-500'
    },
    SELF_UPLOADED_WAITING_UPLOAD_CONTRACT: {
        label: 'Aguardando',
        sub_label: 'Upload do Contrato',
        color: 'text-orange-500'
    },
    SELF_UPLOADED_CYCLE: {
        label: 'Ativo',
        sub_label: 'Contrato importado',
        color: 'text-teal-500'
    },
    ARCHIVED: {
        label: 'Arquivado',
        sub_label: 'Contrato fechado',
        color: 'text-gray-500'
    },
    DONE: {
        label: 'Concluído',
        sub_label: 'Contrato concluido',
        color: 'text-gray-500'
    }
}