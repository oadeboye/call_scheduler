<div className="modal fade" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <form>

          <div className="form-group">
            {/* <label htmlFor="name">Name</label> */}
            <input type="name" className="form-control"
              id="name" placeholder="Name" value={this.state.name}
              onChange={(event) => this.handleNameChange(event)}/>
            </div>
            <div className="form-group">
              {/* <label htmlFor="number">Number</label> */}
              <input type="number" className="form-control"
                id="number" placeholder="Phone number" value={this.state.number}
                onChange={(event) => this.handleNumberChange(event)}/>
              </div>
              <button type="submit" className="btn btn-primary"
                onClick={()=>this.handleSubmit()}>Submit</button>
        </form>
            </div>
          </div>
  </div>
</div>
