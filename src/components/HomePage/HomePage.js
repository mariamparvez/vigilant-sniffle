import React from "react";
import "../style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../../../node_modules/bootstrap/dist/js/popper.min.js"
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

const HomePage = () => {
    return ( 
        <>
         	<div className="pharmacy-home-slider">
				    <div className="swiper-container">
						<div style={{backgroundColor: "#f9f9f9", padding: "10rem 0 0 0"}}>
							<section className="section section-search"></section>
						</div>
				    </div>
				
				   
				    <div className="banner-wrapper">
						
                        <div className="banner-header">
							<h1>Search Doctor,<br /> Make an Appointment</h1>
							<p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
						</div>
               
						<div className="search-box" style={{padding: "0"}}>
							<div className="s-btns">
								<button id="search-btns" className="search-btns">Doctors</button>
								<button id="search-btns2" className="search-btns2">Clinics</button>
								<button id="search-btns3" className="search-btns3">Video Consultation</button>
							</div>
						</div>
						
                        <form className="form-design" action="../../../public/webpages/list.html">
                        
                        <div className="form-group search-location">
                            <input type="text" className="form-control" placeholder="Search Location" />
                            <span className="form-text">Based on your Location</span>
                        </div>
                        
                        <div className="form-group search-info">
                            <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                            <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                        </div>

                        <button id="search-btn" type="submit" className="btn btn-primary search-btn mt-0"><i className="fas fa-search"></i><span>Search</span></button>
                    
                        </form>
						
					</div>
		</div>

					  
	<section className="section home-tile-section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-9 m-auto">
					<div className="row">
						    
                            <div className="col-md-4">
								<div className="pop-box">
									<div className="top-section">
										<img style={{borderRadius: ".5rem"}} src="../../../public/img//three/1.png" alt="doc-img"/>
									</div>
                                    <div className="body-section">
                                        <h3 style={{marginTop: "8px"}}>Assess Your Health</h3>
                                        <h6>Assess Your Health and Connect to doctors using our AI technology</h6>
                                        <a href="booking.html" className="btn book-btn" tabIndex="0">Book Now</a>
                                    </div>
							    </div>
							</div>
                            
                            <div className="col-md-4">
                                <div className="pop-box">
                                    <div className="top-section">
                                        <img style={{borderRadius: ".5rem"}} src="../../../public/img//three/2.png" alt="doc-img" />
                                    </div>
                                    <div className="body-section">
                                        <h3>Pregnancy packages</h3>
                                        <h6>Buy Complete Pregnancy pacakges</h6>
                                        <a href="booking.html" className="btn book-btn" tabIndex="0">Book Now</a>
                                    </div>
                                </div>
                            </div>
									
                            <div className="col-md-4">
                                <div className="pop-box">
                                    <div className="top-section">
                                        <img style={{borderRadius: ".5rem"}} src="../../../public/img//three/3.png" alt="doc-img" />
                                    </div>
                                    <div className="body-section">
                                        <h3>Health Insurance @ 50 INR</h3>
                                        <h6>Insurance at Just 50 INR</h6>
                                        <a href="booking.html" className="btn book-btn" tabIndex="0">Book Now</a>
                                    </div>
                                </div>
                            </div>
								
                    </div>
                </div>
            </div>
        </div>
    </section>



			<section className="section section-specialities">
				<div className="container-fluid">
					<div className="section-header text-center">
						<h2>Clinics and Specialities</h2>
						<p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				<div className="row justify-content-center">
				
            <div className="col-md-9">
					<div className="specialities-slider slider">
							<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../../../public/img/specialities/specialities-01.png" className="img-fluid" alt="Speciality"/>
									</div>
									<p>Urology</p>
								</div>	
					
								
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../../../public/img/specialities/specialities-02.png" className="img-fluid" alt="Speciality"/>
									</div>
									<p>Neurology</p>	
								</div>							
					
								
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../../../public/img/specialities/specialities-03.png" className="img-fluid" alt="Speciality"/>
									</div>	
									<p>Orthopaedics</p>	
								</div>							
					
								
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../../../public/img/specialities/specialities-04.png" className="img-fluid" alt="Speciality"/>
									</div>	
									<p>Cardiologist</p>	
								</div>							
					
								
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../../../public/img/specialities/specialities-05.png" className="img-fluid" alt="Speciality"/>
									</div>	
									<p>Dentist</p>
								</div>							
					

				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../../../public/img/specialities/specialities-06.png" className="img-fluid" alt="Speciality"/>

									</div>	
									<p>Ophthalmologist</p>
								</div>							
					
							
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="../../../public/img/specialities/specialities-07.png" className="img-fluid" alt="Speciality" />

									</div>	
									<p>Paediatrics</p>
			</div></div></div></div></div></section>	 

		<section style={{backgroundImage:`linear-gradient(to right, #fbfdff , #E6EFF9)`}} className="section section-features">
			<div style={{paddingLeft: "10rem"}} className="container-fluid">
				<div className="row">
					<div className="col-md-4 features-img">
						<h2 className="mt-2">Availabe Features <br/>in Our Clinic</h2><br/>
						<p>It is a long established fact that a reader will be disit aet voluptates veniam fugstracsit sit aet voluptates veniam fugaet voluptates veniam fugted by the readable t e when looking at its layout.</p>
						<br/><br/><br/>
						<p>Lorem ipsum dolor a inventore sequi dolor.</p>
						<input type="text" placeholder="Enter Your Phone Number" name="app" id="app" />
						<button style={{margin: ".5rem",}} id="app-num">Download</button>
					</div>
					<div className="col-md-8">
						<div className="section-header text-center">
							<img src="../../../public/img/app/main.png" className="img-fluid" alt="Feature"/>
						</div>
						</div>
				
						</div>
					</div>
		</section>

		<section className="book-doctor">
			<div className="container">					
				<div className="section-header text-center">
					<h2>Book Our Doctors</h2>
					<p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique.</p>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="book-slider slider">
							<div className="profile-widget">
								<a href="doctor-profile.html">
									<img src="../../../public/img/doctors/book-doc-01.jpg" alt="doc-img" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="#" className="star"><i className="fas fa-star"></i></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Ruby Perrin</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="#" className="side-arrow">
											<i className="fas fa-chevron-right"></i>
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Georgia, USA
												</li>
												<li>
													<i className="far fa-clock"></i> 450 Consultations
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="javascript:void(0);" className="btn view-btn" tabIndex="0">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn" tabIndex="0">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="profile-widget">
								<a href="doctor-profile.html">
									<img src="../../../public/img/doctors/book-doc-02.jpg" alt="doc-img" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="#" className="star"><i className="fas fa-star"></i></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Darren Elder</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="#" className="side-arrow">
											<i className="fas fa-chevron-right"></i>
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Georgia, USA
												</li>
												<li>
													<i className="far fa-clock"></i> 450 Consultations
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn" tabIndex="0">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn" tabIndex="0">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="profile-widget">
								<a href="#">
									<img src="../../../public/img/doctors/book-doc-03.jpg" alt="doc-img" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="#" className="star"><i className="fas fa-star"></i></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Paul Richard</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="#" className="side-arrow">
											<i className="fas fa-chevron-right"></i>
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Georgia, USA
												</li>
												<li>
													<i className="far fa-clock"></i> 450 Consultations
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn" tabIndex="0">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn" tabIndex="0">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="profile-widget">
								<a href="#">
									<img src="../../../public/img/doctors/book-doc-04.jpg" alt="doc-img" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="#" className="star"><i className="fas fa-star"></i></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Linda Tobin</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="#" className="side-arrow">
											<i className="fas fa-chevron-right"></i>
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Georgia, USA
												</li>
												<li>
													<i className="far fa-clock"></i> 450 Consultations
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn" tabIndex="0">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn" tabIndex="0">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="profile-widget">
								<a href="#">
									<img src="../../../public/img/doctors/book-doc-05.jpg" alt="doc-img" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="#" className="star"><i className="fas fa-star"></i></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Marvin Paul</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="#" className="side-arrow">
											<i className="fas fa-chevron-right"></i>
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
													<i className="fas fa-map-marker-alt"></i> Georgia, USA
												</li>
												<li>
													<i className="far fa-clock"></i> 450 Consultations
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="doctor-profile.html" className="btn view-btn" tabIndex="0">View Profile</a>
												</div>
												<div className="col-6">
													<a href="booking.html" className="btn book-btn" tabIndex="0">Book Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center mt-4">
					<a href="doctor-profile.html" className="view-btn">View More</a>
				</div>
			</div>
		</section>

		<section className="section section-features" style={{backgroundColor: "#d8dae4"}}>
			<div className="container">
			   <div className="row"  style={{display: "flex", alignItems: "center"}}>
					<div className="col-md-5 features-img">
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p style={{marginRight: "1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore temporibus eius sint cu.</p>
						<p style={{marginRight: "1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore temporibus eius sint cumque delectus dicta error repellendus eveniet odio?</p>
						<button style={{margin: "1rem 0", padding: ".5rem", fontWeight: "400", backgroundColor: "#fdfdfd", bordeRadius: ".5rem", border: "1px solid rgb(46, 46, 46)"}}>Click Here</button>
					</div>
					<div className="col-md-7">
						<div className="row" >
							<div className="col-lg-6 mb-4">
								<div className="blog-wrap">
									<div className="image-holder">
										<a href="blog-details.html">
											<img className="img-fluid" src="../../../public/img/shapes/blog-img02.jpg" alt="Post Image"/>
										</a>
									</div>
									<div className="blog-wrap-body">
										<h4 style={{margin: "1rem 0"}}><a href="blog-details.html">World AIDS Day, designated on 1 December</a></h4>
										<h6 style={{paddingLeft: "0%", marginLeft: "0%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
										ut labore et..</h6>
										<div className="blog-footer">
											<div className="row row-sm align-items-center">
												<div className="col-6 text-left">
													<a href="blog-details.html" className="read-txt" tabIndex="0">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
												</div>
												<div className="col-6 text-right">
													<a href="javascript:void(0);" className="cal-txt" tabIndex="0"><i className="far fa-calendar-alt"></i> Jan 03, 2020</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="blog-wrap">
									<div className="image-holder">
										<a href="blog-details.html">
											<img className="img-fluid" src="../../../public/img/shapes/blog-img03.jpg" alt="Post Image"/>
										</a>
									</div>
									<div className="blog-wrap-body">
										<h4 style={{margin: "1rem 0"}}><a href="blog-details.html">World AIDS Day, designated on 1 December</a></h4>
										<h6 style={{paddingLeft: "0%", marginLeft: "0%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
										ut labore et..</h6>
										<div className="blog-footer">
											<div className="row row-sm align-items-center">
												<div className="col-6 text-left">
													<a href="blog-details.html" className="read-txt" tabIndex="0">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
												</div>
												<div className="col-6 text-right">
													<a href="javascript:void(0);" className="cal-txt" tabIndex="0"><i className="far fa-calendar-alt"></i> Jan 03, 2020</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					</div>
			   </div>
			</div>
         </div>
   	</section>		
   
        </>
     );
}
 
export default HomePage;