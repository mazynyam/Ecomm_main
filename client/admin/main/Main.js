import React, {useState} from 'react'
import UsersList from '../Users/UsersList'
export default function Main() {
    const [sidebar, setSidebar]  = useState(false)
    return (
       <div className="content-wrapper">
 
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Dashboard</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard </li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  
  <section className="content">
    <div className="container-fluid">
     
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
      </div>
     
      <div className="row">
    
        <section className="col-lg-7 connectedSortable">
        
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1" />
                Sales
              </h3>
              <div className="card-tools">
                <ul className="nav nav-pills ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                  </li>
                </ul>
              </div>
            </div>{/* /.card-header */}
            <div className="card-body">
              <div className="tab-content p-0">
                {/* Morris chart - Sales */}
                <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />                         
                </div>
                <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />                         
                </div>  
              </div>
            </div>{/* /.card-body */}
          </div>
         
          <UsersList />
        </section>
       
        <section className="col-lg-5 connectedSortable">
        
                    <div className="card bg-gradient-success">
            <div className="card-header border-0">
                <h3 className="card-title">
                <i className="far fa-calendar-alt" />
                Calendar
                </h3>
                
                <div className="card-tools">
               
                <div className="btn-group">
                    <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset={-52}>
                    <i className="fas fa-bars" /></button>
                    <div className="dropdown-menu" role="menu">
                    <a href="#" className="dropdown-item">Add new event</a>
                    <a href="#" className="dropdown-item">Clear events</a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">View calendar</a>
                    </div>
                </div>
               
                </div>
                {/* /. tools */}
            </div>
     
            <div className="card-body pt-0">
                
                <div id="calendar" style={{width: '100%'}} />
            </div>
           
            </div>
          <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
              <h3 className="card-title">Live Chat</h3>
              <div className="card-tools">
                <span data-toggle="tooltip" title="3 New Messages" className="badge badge-primary">3</span>
                
              </div>
            </div>
           
            <div className="card-body">
           
              <div className="direct-chat-messages">
               
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    
                    <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                  </div>
                
                  <p className="direct-chat-img">Name</p>
                 
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
                  
                </div>
                {/* /.direct-chat-msg */}
                {/* Message to the right */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    
                    <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                  </div>
                 
                  <p className="direct-chat-img">Name</p>
                  
                  <div className="direct-chat-text">
                    You better believe it!
                  </div>
                  
                </div>
               
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    
                    <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                  </div>
                 
                  <p className="direct-chat-img">Name</p>
                  
                  <div className="direct-chat-text">
                    Working with AdminLTE on a great new app! Wanna join?
                  </div>
                 
                </div>
                
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                 
                    <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                  </div>
                 
                  <p className="direct-chat-img">Name</p>
               
                  <div className="direct-chat-text">
                    I would love to.
                  </div>
                 
                </div>
                
              </div>
              
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                    <p className="direct-chat-img">Name</p>
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">2/28/2015</small>
                        </span>
                        <span className="contacts-list-msg">How have you been? I was...</span>
                      </div>
                     
                    </a>
                  </li>
                 
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Sarah Doe
                          <small className="contacts-list-date float-right">2/23/2015</small>
                        </span>
                        <span className="contacts-list-msg">I will be waiting for...</span>
                      </div>
                    </a>
                  </li>
                  
                  
                </ul>
              </div>
              
            </div>
     
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                  <span className="input-group-append">
                    <button type="button" className="btn btn-primary">Send</button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        </section>
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

    ) 
}