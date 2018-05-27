import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

import { Icon } from '../'

import { BodyText, Headline } from '../../global/type'

import { toEms, media, shadeOf } from '../../global/utils'

import { color, fontFamily, fontWeight } from '../../global/theme'

import { LeftArrow } from '../../global/icons'

// prettier-ignore
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.down.sm`
    flex-direction: column;
    justify-content: center;
  `}
`

const DetailListItem = styled.span`
  &:after {
    content: ', ';
  }

  &:last-child {
    &:after {
      content: none;
    }
  }
`

// prettier-ignore
const Members = styled.div`
  flex: 0 1 925px;
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
  align-items: flex-start;

  ${media.down.sm`
    justify-content: center;
  `}
`

const ImageContainer = styled.figure`
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  max-width: 282px;
  max-height: 282px;
  vertical-align: top;
  margin: auto;

  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }
`

const Quote = styled.blockquote`
  display: inline-block;
  quotes: '“' '”' '‘' '’';

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`

const Image = styled.img`
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  position: absolute;
  object-fit: cover;
`

// prettier-ignore
const Name = styled(BodyText)`
  margin-top: 20px;
  font-family: ${fontFamily.openSans};
  font-weight: ${fontWeight.bold};
  font-size: ${toEms('14px')};

  ${props => props.hasDetails && `
    color: ${color.persimmon};
  `}
`

const BioName = styled.div`
  margin-bottom: 20px;
  margin-top: 50px;
`

// prettier-ignore
const Member = styled.div`
  padding: 20px;
  text-align: center;
  flex: 1 0 195px;
  max-width: 232px;

  ${props => props.hasDetails && `
    cursor: pointer;

    &:hover {
      ${Name} {
        color: ${color.persimmon};
        text-decoration: underline;
      }
    }
  `}

  ${media.down.xl`
    flex-basis: ${1 / 3 * 100}%;
  `}

  ${media.down.md`
    flex-basis: ${1 / 2 * 100}%;
  `}

  ${media.down.xs`
    flex-basis: 100%;
    margin: auto;
  `}
`

// prettier-ignore
const Filters = styled.div`
  flex: 0 1 295px;
  text-align: left;
  padding-right: 20px;

  ${media.down.sm`
    padding-right: 0;
    margin-bottom: 40px;
  `}
`

// prettier-ignore
const FilterLocation = styled.div`
  padding: 15px 25px 15px 0;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    border-radius: 100px;
    position: absolute;
    right: 0;
    background-color: ${color.persimmon};
    top: 26px;
    transform: translate3d(0, -50%, 0);
  }

  &::before {
    width: 16px;
    height: 2px;
  }

  &::after {
    height: 16px;
    width: 2px;
    right: 7px;
  }

  ${props => props.active && `
    &::after {
      height: 0;
    }
  `}
`

const BackButton = styled.div`
  text-align: left;
  cursor: pointer;
`

const LocationName = styled(BodyText)`
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
`

const Label = styled.label`
  font-size: ${toEms('14px')};
  font-family: ${fontFamily.openSans};
  font-weight: ${fontWeight.regular};
  margin-bottom: 15px;
  display: block;
`

// prettier-ignore
const Departments = styled.div`
  display: none;
  padding-bottom: 25px;
  padding-right: 25px;

  ${props => props.active && `
    display: block;
  `}
`

const LeftArrowIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
`

const Filter = styled.div`
  border-top: 1px solid ${shadeOf(color.emperor, 0.3)};

  &:last-of-type {
    border-bottom: 1px solid ${shadeOf(color.emperor, 0.3)};
  }
`

// prettier-ignore
const DepartmentName = styled(BodyText)`
  font-size: ${toEms('14px')};
  text-decoration: underline;

  ${props => props.active && `
    color: ${color.persimmon};
    text-decoration: none;
  `}
`

const Detail = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Department = styled.div`
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    ${DepartmentName} {
      color: ${color.persimmon};
      text-decoration: none;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeDepartment: props.locations[0].departments[0],
      activeLocation: props.locations[0].name,
      activeMember: null,
      detailView: false,
    }
  }

  handleLocationChange = location => {
    this.setState({
      activeDepartment: location.departments[0],
      activeLocation: location.name,
    })
  }

  handleDepartmentChange = department => {
    this.setState({ activeDepartment: department })
  }

  filterResults = member => {
    const locationMatch = member.location === this.state.activeLocation
    const departmentMatch = member.department === this.state.activeDepartment

    return locationMatch && departmentMatch
  }

  filterLocations = location => {
    return location.departments.length > 0
  }

  showDetails = member => {
    this.setState({ activeMember: member, detailView: true })
  }

  showMembers = () => {
    this.setState({ detailView: false })
  }

  checkForDetails = details => {
    return (
      details &&
      (details.hometown ||
        details.degrees.length > 0 ||
        details.colleges.length > 0 ||
        details.specialCertifications.length > 0 ||
        details.patientAgesSeen.length > 0 ||
        details.clientPopulationsSeen.length > 0 ||
        details.therapyModalityUsed.length > 0 ||
        details.hobbies.length > 0 ||
        details.favoriteQuote)
    )
  }

  render(props, state) {
    const members = props.team.filter(this.filterResults)
    const departments = props.locations.filter(this.filterLocations)

    return (
      <div>
        {state.detailView ? (
          <div>
            <BackButton onClick={this.showMembers}>
              <BodyText>
                <strong>
                  <LeftArrowIcon Name={LeftArrow} /> Back To Our Team
                </strong>
              </BodyText>
            </BackButton>
            <ImageContainer>
              <Image
                src={state.activeMember.image}
                alt={state.activeMember.name}
              />
            </ImageContainer>
            <BioName>
              <Headline>
                {state.activeMember.name}
                {state.activeMember.position && (
                  <span>, {state.activeMember.position}</span>
                )}
              </Headline>
            </BioName>
            {this.checkForDetails(state.activeMember.details) && (
              <div>
                {state.activeMember.details.hometown && (
                  <Detail>
                    <BodyText>
                      <strong>Hometown:</strong>{' '}
                      {state.activeMember.details.hometown}
                    </BodyText>
                  </Detail>
                )}
                {state.activeMember.details.degrees.length > 0 && (
                  <Detail>
                    <BodyText>
                      <strong>Degree(s):</strong>{' '}
                      {state.activeMember.details.degrees.map(deg => (
                        <DetailListItem>{deg}</DetailListItem>
                      ))}
                    </BodyText>
                  </Detail>
                )}
                {state.activeMember.details.colleges.length > 0 && (
                  <Detail>
                    <BodyText>
                      <strong>College(s):</strong>{' '}
                      {state.activeMember.details.colleges.map(col => (
                        <DetailListItem>{col}</DetailListItem>
                      ))}
                    </BodyText>
                  </Detail>
                )}
                {state.activeMember.details.specialCertifications.length >
                  0 && (
                  <Detail>
                    <BodyText>
                      <strong>Special Certification(s):</strong>{' '}
                      {state.activeMember.details.specialCertifications.map(
                        cert => <DetailListItem>{cert}</DetailListItem>
                      )}
                    </BodyText>
                  </Detail>
                )}
                {state.activeMember.details.patientAgesSeen.length > 0 && (
                  <Detail>
                    <BodyText>
                      <strong>Patient Ages Seen:</strong>{' '}
                      {state.activeMember.details.patientAgesSeen.map(age => (
                        <DetailListItem>{age}</DetailListItem>
                      ))}
                    </BodyText>
                  </Detail>
                )}
                {state.activeMember.details.clientPopulationsSeen.length >
                  0 && (
                  <Detail>
                    <BodyText>
                      <strong>Client Populations Seen:</strong>{' '}
                      {state.activeMember.details.clientPopulationsSeen.map(
                        pop => <DetailListItem>{pop}</DetailListItem>
                      )}
                    </BodyText>
                  </Detail>
                )}
                {state.activeMember.details.therapyModalityUsed.length > 0 && (
                  <Detail>
                    <BodyText>
                      <strong>Therapy Modality Used:</strong>{' '}
                      {state.activeMember.details.therapyModalityUsed.map(
                        mod => <DetailListItem>{mod}</DetailListItem>
                      )}
                    </BodyText>
                  </Detail>
                )}
                {state.activeMember.details.hobbies.length > 0 && (
                  <Detail>
                    <BodyText>
                      <strong>Hobbies:</strong>{' '}
                      {state.activeMember.details.hobbies.map(hob => (
                        <DetailListItem>{hob}</DetailListItem>
                      ))}
                    </BodyText>
                  </Detail>
                )}
                {state.activeMember.details.favoriteQuote && (
                  <Detail>
                    <BodyText>
                      <strong>Favorite Quote:</strong>{' '}
                      <Quote>{state.activeMember.details.favoriteQuote}</Quote>
                    </BodyText>
                  </Detail>
                )}
              </div>
            )}
          </div>
        ) : (
          <Container>
            <Filters>
              <Label>Filters:</Label>
              {departments.map((location, i) => {
                const activeLocation = location.name === state.activeLocation
                return (
                  <Filter key={i}>
                    <FilterLocation
                      active={activeLocation}
                      onClick={() => this.handleLocationChange(location)}>
                      <LocationName>{location.name}</LocationName>
                    </FilterLocation>
                    <Departments active={activeLocation}>
                      {location.departments.map((department, i) => {
                        const activeDepartment =
                          department === state.activeDepartment
                        return (
                          <Department
                            key={i}
                            onClick={() =>
                              this.handleDepartmentChange(department)
                            }>
                            <DepartmentName active={activeDepartment}>
                              {department}
                            </DepartmentName>
                          </Department>
                        )
                      })}
                    </Departments>
                  </Filter>
                )
              })}
            </Filters>
            <Members>
              {members.map((member, i) => {
                const hasDetails = this.checkForDetails(member.details)

                return (
                  <Member
                    hasDetails={hasDetails}
                    onClick={() => this.showDetails(member)}
                    key={i}>
                    <ImageContainer>
                      <Image src={member.image} alt={member.name} />
                    </ImageContainer>
                    <Name hasDetails={hasDetails}>
                      {member.name}
                      {member.position && <span>, {member.position}</span>}
                    </Name>
                  </Member>
                )
              })}
            </Members>
          </Container>
        )}
      </div>
    )
  }
}

Team.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      departments: PropTypes.arrayOf(PropTypes.string),
      name: PropTypes.string,
    })
  ),
  team: PropTypes.arrayOf(
    PropTypes.shape({
      department: PropTypes.string,
      details: PropTypes.shape({
        clientPopulationsSeen: PropTypes.arrayOf(PropTypes.string),
        colleges: PropTypes.arrayOf(PropTypes.string),
        degrees: PropTypes.arrayOf(PropTypes.string),
        favoriteQuote: PropTypes.string,
        hobbies: PropTypes.arrayOf(PropTypes.string),
        hometown: PropTypes.string,
        patientAgesSeen: PropTypes.arrayOf(PropTypes.string),
        specialCertifications: PropTypes.arrayOf(PropTypes.string),
        therapyModalityUsed: PropTypes.arrayOf(PropTypes.string),
      }),
      image: PropTypes.string,
      location: PropTypes.string,
      name: PropTypes.string,
      position: PropTypes.string,
    })
  ),
}

export default Team
