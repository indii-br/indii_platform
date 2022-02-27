import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from '../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private clientSupabase: SupabaseClient;

  constructor() { 
    this.clientSupabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  get supabase(): SupabaseClient{
    return this.clientSupabase
  }
}
