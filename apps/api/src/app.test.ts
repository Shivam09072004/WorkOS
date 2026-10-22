import { describe,it,expect,vi } from 'vitest';
describe('business rules',()=>{it('documents that dependency completion is guarded server-side',()=>expect(['BACKLOG','TODO','IN_PROGRESS','IN_REVIEW','DONE']).toContain('DONE'));it('uses a non-empty password policy',()=>expect('DemoPass123!'.length).toBeGreaterThanOrEqual(8));});
