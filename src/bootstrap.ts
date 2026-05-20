export type PersistenceDriver = 'in-memory' | 'typeorm';

export type BootstrapConfig = {
    persistanceDriver: PersistenceDriver;
};
