import React from "react";
import "../style.css";
import { faCalendarAlt, faChevronRight, faClock, faMapMarkerAlt, faSearch, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

//images 
import threeOne from "../img/three/1.png"
import threeTwo from "../img/three/2.png"
import threeThree from "../img/three/3.png"
import specialityA from "../img/specialities/1.png"
import specialityB from "../img/specialities/2.png"
import specialityC from "../img/specialities/3.png"
import specialityD from "../img/specialities/4.png"
import specialityE from "../img/specialities/5.png"
import specialityF from "../img/specialities/6.png"
import specialityG from "../img/specialities/7.png"
import main from "../img/app/main.png"
import blogB from "../img/shapes/blog-img02.jpg"
import blogC from "../img/shapes/blog-img03.jpg"
import bookDocA from "../img/doctors/book-doc-01.jpg"
import bookDocB from "../img/doctors/book-doc-02.jpg"
import bookDocC from "../img/doctors/book-doc-03.jpg"
import bookDocD from "../img/doctors/book-doc-04.jpg"
import bookDocE from "../img/doctors/book-doc-05.jpg"

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
						
                        <form className="form-design" action="webpages/list.html">
                        
                        <div className="form-group search-location">
                            <input type="text" className="form-control" placeholder="Search Location" />
                            <span className="form-text">Based on your Location</span>
                        </div>
                        
                        <div className="form-group search-info">
                            <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                            <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                        </div>

                        <button id="search-btn" type="submit" className="btn btn-primary search-btn mt-0"><FontAwesomeIcon icon={faSearch} /><span>Search</span></button>
                    
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
										<img style={{borderRadius: ".5rem"}} src={threeOne} alt="book-doc"/>
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
                                        <img style={{borderRadius: ".5rem"}} src={threeTwo} alt="book-doc" />
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
                                        <img style={{borderRadius: ".5rem"}} src={threeThree} alt="book-doc" />
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
										<img src={specialityA} className="img-fluid" alt="Speciality"/>
									</div>
									<p>Urology</p>
								</div>	
					
								
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialityB} className="img-fluid" alt="Speciality"/>
									</div>
									<p>Neurology</p>	
								</div>							
					
								
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialityC} className="img-fluid" alt="Speciality"/>
									</div>	
									<p>Orthopaedics</p>	
								</div>							
					
								
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialityD} className="img-fluid" alt="Speciality"/>
									</div>	
									<p>Cardiologist</p>	
								</div>							
					
								
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialityE} className="img-fluid" alt="Speciality"/>
									</div>	
									<p>Dentist</p>
								</div>							
					

				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialityF} className="img-fluid" alt="Speciality"/>

									</div>	
									<p>Ophthalmologist</p>
								</div>							
					
							
				
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialityG} className="img-fluid" alt="Speciality" />

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
							<img src={main} className="img-fluid" alt="Feature"/>
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
									<img src={bookDocA} alt="book-doc" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="!#" className="star"><FontAwesomeIcon icon={faStar} /></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Ruby Perrin</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStarHalf} />
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="!#" className="side-arrow">
											<FontAwesomeIcon icon={faChevronRight} />
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
												<FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA
												</li>
												<li>
												<FontAwesomeIcon icon={faClock} /> 450 Consultations
												</li>
											</ul>
											<div className="row row-sm">
												<div className="col-6">
													<a href="!#" className="btn view-btn" tabIndex="0">View Profile</a>
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
									<img src={bookDocB} alt="book-doc" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="!#" className="star"><FontAwesomeIcon icon={faStar} /></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Darren Elder</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStarHalf} />
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="!#" className="side-arrow">
											<FontAwesomeIcon icon={faChevronRight} />
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
												<FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA
												</li>
												<li>
												<FontAwesomeIcon icon={faClock} /> 450 Consultations
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
								<a href="!#">
									<img src={bookDocC} alt="book-doc" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="!#" className="star"><FontAwesomeIcon icon={faStar} /></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Paul Richard</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStarHalf} />
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="!#" className="side-arrow">
											<FontAwesomeIcon icon={faChevronRight} />
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
												<FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA
												</li>
												<li>
												<FontAwesomeIcon icon={faMapMarkerAlt} /> 450 Consultations
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
								<a href="!#">
									<img src={bookDocD} alt="book-doc" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="!#" className="star"><FontAwesomeIcon icon={faStar} /></a>	
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Linda Tobin</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStarHalf} />
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="!#" className="side-arrow">
											<FontAwesomeIcon icon={faChevronRight} />
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
												<FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA
												</li>
												<li>
												<FontAwesomeIcon icon={faClock} /> 450 Consultations
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
								<a href="!#">
									<img src={bookDocE} alt="book-doc" />
								</a>
								<div className="pro-content">
									<div  className="row row-sm">	
										<div className="col-md-6">							
											<span className="amt">$20 - $50</span>
										</div>
										<div className="col-md-6 text-right">
											<a href="!#" className="star"><FontAwesomeIcon icon={faStar} /></a>
										</div>
									</div>
									<div className="provider-info">
										<h3><a href="doctor-profile.html">Dr. Marvin Paul</a></h3>
										<div>
											<h5>PSICOLOGIST </h5>
											<div className="rating">
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStarHalf} />
												<span className="d-inline-block average-rating">3.5</span>
											</div>
										</div>
										<a href="!#" className="side-arrow">
											<FontAwesomeIcon icon={faChevronRight} />
										</a>
										<div className="content-info">
											<ul className="available-info">
												<li>
												<FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA
												</li>
												<li>
												<FontAwesomeIcon icon={faClock} /> 450 Consultations
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
											<img className="img-fluid" src={blogB} alt="blog-post"/>
										</a>
									</div>
									<div className="blog-wrap-body">
										<h4 style={{margin: "1rem 0"}}><a href="blog-details.html">World AIDS Day, designated on 1 December</a></h4>
										<h6 style={{paddingLeft: "0%", marginLeft: "0%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
										ut labore et..</h6>
										<div className="blog-footer">
											<div className="row row-sm align-items-center">
												<div className="col-6 text-left">
												</div>
												<div className="col-6 text-right">
													<a href="!#" className="cal-txt" tabIndex="0"><FontAwesomeIcon icon={faCalendarAlt} /> Jan 03, 2020</a>
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
											<img className="img-fluid" src={blogC} alt="blog-post"/>
										</a>
									</div>
									<div className="blog-wrap-body">
										<h4 style={{margin: "1rem 0"}}><a href="blog-details.html">World AIDS Day, designated on 1 December</a></h4>
										<h6 style={{paddingLeft: "0%", marginLeft: "0%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
										ut labore et..</h6>
										<div className="blog-footer">
											<div className="row row-sm align-items-center">
												<div className="col-6 text-left">
													<a href="blog-details.html" className="read-txt" tabIndex="0">Read More <FontAwesomeIcon icon={faChevronRight} /></a>
												</div>
												<div className="col-6 text-right">
													<a href="!#" className="cal-txt" tabIndex="0"><FontAwesomeIcon icon={faCalendarAlt} /> Jan 03, 2020</a>
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