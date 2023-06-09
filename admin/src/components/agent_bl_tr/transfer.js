import React, { Component } from "react";

export default class transfer extends Component {
  render() {
    return (
      <>
        <div class="content-body">
          <div class="container-fluid">
            
          {/* <div class="col-xl-6 col-lg-12">  */}
          <div class=" col-lg-12"> 
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Agent Balance Transfer</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <form>

                                        <div class="mb-3 row">
                                            <label class="col-sm-3 col-form-label">Agent Email</label>
                                            <div class="col-sm-9">
                                                <input type="email" name="email" class="form-control" placeholder="Email"/>
                                            </div>
                                        </div>
                                        
                                        <div class="mb-3 row">
                                            <label class="col-sm-3 col-form-label">Amount</label>
                                            <div class="col-sm-9">
                                                <input type="text" name="amount" class="form-control" placeholder="Amount"/>
                                            </div>
                                        </div>

                                        <div class="mb-3 row">
                                            <label class="col-sm-3 col-form-label">Security  Key</label>
                                            <div class="col-sm-9">
                                                <input type="text" name="s-key" class="form-control" placeholder="Password"/>
                                            </div>
                                        </div>

                                        

                                        <div class="mb-3 row">
                                            <div class="col-sm-10">
                                                <button type="submit" name="send" class="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
					</div>

          </div>
        </div>
      </>
    );
  }
}
